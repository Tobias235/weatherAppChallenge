import { useState, useEffect } from "react";

import MainWeather from "./weather/MainWeather";
import SearchBar from "./weather/SearchBar";
import Modal from "./weather/modal/Modal";

function App() {
  const [coords, setCoords] = useState({
    lat: "59.3293",
    lon: "18.0686",
  });
  const [showModal, setShowModal] = useState(false);
  const [currentWeather, setCurrentWeather] = useState({});
  const [highlights, setHighlights] = useState({});
  const [forecast, setForecast] = useState([]);

  let array = [];

  const fetchLocationCoords = async (location) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric
      `
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const responseData = await response.json();
    console.log(responseData);
    setCoords({
      lat: responseData.coord.lat,
      lon: responseData.coord.lon,
    });
  };

  useEffect(() => {
    const fetchWeatherData = async (location) => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=hourly,minutely&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      const city = responseData.timezone.split("/");
      setCurrentWeather({
        city: city[1],
        temperature: responseData.current.temp,
        weather: responseData.current.weather[0].description,
        icon: responseData.current.weather[0].icon,
      });
      setHighlights({
        wind: responseData.current.wind_speed,
        windDirection: responseData.current.wind_deg,
        humidity: responseData.current.humidity,
        visibility: responseData.current.visibility,
        airPressure: responseData.current.pressure,
      });
      array = [...responseData.daily];
      setForecast(array);
    };

    fetchWeatherData();
  }, [coords]);

  const handleClick = () => {
    console.log(forecast);
  };

  const handleSearchButton = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSearchLocation = (e) => {
    const parent = e.currentTarget.parentElement;
    fetchLocationCoords(parent.children[0].value);
    setShowModal(false);
  };

  return (
    <div className="container">
      <button onClick={handleClick}>click me</button>
      <SearchBar
        weatherData={currentWeather}
        onHandleModal={handleSearchButton}
      />
      {showModal && (
        <Modal onClick={handleCloseModal} onSearch={handleSearchLocation} />
      )}
      <MainWeather weatherHighlights={highlights} forecast={forecast} />
    </div>
  );
}

export default App;
