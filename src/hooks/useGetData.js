import { useEffect, useState } from "react";

const useFetch = (location) => {
  const [coords, setCoords] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [city, setCity] = useState();

  let searchLocation = location.location;
  let userLocation = location.userLocation;

  useEffect(() => {
    const getUserLocation = async (position) => {
      let userLocationCoords = {
        lat: position.coords.latitude.toFixed(4),
        lon: position.coords.longitude.toFixed(4),
      };

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/find?lat=${userLocationCoords.lat}&lon=${userLocationCoords.lon}&cnt=1&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      setCity(responseData.list[0].name);
      setCoords(userLocationCoords);
    };

    const userLocationError = (error) => {
      if (error.code === error.PERMISSION_DENIED) {
        return;
      }
    };

    const options = {
      enableHighAccuracy: true,
    };

    navigator.geolocation.getCurrentPosition(
      getUserLocation,
      userLocationError,
      options
    );
  }, [userLocation]);

  useEffect(() => {
    const getLocationByCity = async () => {
      if (searchLocation.trim() === "") {
        return;
      }
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();

      setCoords(responseData.coord);
      setCity(responseData.name);
    };
    getLocationByCity();
  }, [searchLocation]);

  useEffect(() => {
    if (!coords) {
      return;
    }
    const fetchFullWeatherData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=hourly,minutely&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error(response.text);
      }
      const responseData = await response.json();
      setForecast([...responseData.daily]);
      setCurrentWeather(responseData.current);
    };
    fetchFullWeatherData();
  }, [coords]);

  return { forecast, currentWeather, city };
};

export default useFetch;
