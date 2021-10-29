import { useState, useEffect } from "react";

import MainWeather from "./weather/MainWeather";
import SearchBar from "./weather/SearchBar";
import Modal from "./weather/modal/Modal";
require("dotenv").config();
function App() {
  const [coords, setCoords] = useState({
    lat: "59.3293",
    lon: "18.0686",
  });
  const [city, setCity] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentWeather, setCurrentWeather] = useState({
    temperature: 0,
    weather: "broken clouds",
    icon: "01d",
  });
  const [highlights, setHighlights] = useState({
    wind: 2,
    windDirection: 220,
    humidity: 50,
    visibility: 10000,
    airPressure: 1000,
  });
  const [forecast, setForecast] = useState([]);
  const [search, setSearch] = useState([]);

  const fetchLocationCoords = async (location) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const responseData = await response.json();

    setCoords({
      lat: responseData.coord.lat,
      lon: responseData.coord.lon,
    });
    setCity(responseData.name);
  };

  useEffect(() => {
    const fetchWeatherData = async (location) => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=hourly,minutely&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      setCurrentWeather({
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
      setForecast([...responseData.daily]);
    };

    fetchWeatherData();
  }, [coords]);

  const handleSearchButton = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSearchLocation = (e) => {
    const parent = e.currentTarget.parentElement;
    let searchValue = parent.children[0].value;
    if (searchValue.trim() === "") {
      setShowModal(false);
      console.log("Its empty");
    } else {
      const newSearchArray = [...search, searchValue].reverse();
      setSearch(newSearchArray);
      fetchLocationCoords(searchValue);
      setShowModal(false);
    }
  };

  const handlePrevSearch = (e) => {
    fetchLocationCoords(e.target.textContent);
    setShowModal(false);
  };

  return (
    <div className="container">
      <SearchBar
        weatherData={currentWeather}
        city={city}
        onHandleModal={handleSearchButton}
      />
      {showModal && (
        <Modal
          onClose={handleCloseModal}
          onSearch={handleSearchLocation}
          onPrevSearch={handlePrevSearch}
          searches={search}
        />
      )}
      <MainWeather weatherHighlights={highlights} forecast={forecast} />
    </div>
  );
}

export default App;
