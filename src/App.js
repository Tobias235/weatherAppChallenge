import { useState, useEffect } from "react";

import MainWeather from "./weather/MainWeather";
import SearchBar from "./weather/SearchBar";

function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [highlights, setHighlights] = useState({});

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric
    `
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const responseData = await response.json();
    console.log(responseData);
    setCurrentWeather({
      city: responseData.name,
      temperature: responseData.main.temp,
      weather: responseData.weather[0].main,
    });
    setHighlights({
      wind: responseData.wind.speed,
      windDirection: responseData.wind.deg,
      humidity: responseData.main.humidity,
      visibility: responseData.visibility,
      airPressure: responseData.main.pressure,
    });
  };

  const handleClick = () => {
    console.log(currentWeather);
    console.log(highlights);
  };

  return (
    <div className="container">
      <button onClick={handleClick}>click me</button>
      <SearchBar weatherData={currentWeather} />
      <MainWeather weatherHighlights={highlights} />
    </div>
  );
}

export default App;
