import { useEffect, useState } from "react";

const useFetch = (location) => {
  const [coords, setCoords] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [city, setCity] = useState();

  useEffect(() => {
    if (location.trim() === "") {
      return;
    }
    const fetchDataCoords = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      setCoords(responseData.coord);
      setCity(responseData.name);
    };
    fetchDataCoords();
  }, [location]);

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
