import { useState, useEffect } from "react";

import MainWeather from "./weather/MainWeather";
import SearchBar from "./weather/SearchBar";
import Modal from "./modal/Modal";
import useGetData from "./hooks/useGetData";

function App() {
  const [location, setLocation] = useState({
    location: "stockholm",
    userLocation: true,
  });
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [unit, setUnit] = useState("°C");

  const { forecast, currentWeather, city } = useGetData(location);

  useEffect(() => {
    if (forecast !== null && currentWeather !== null) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [forecast, currentWeather]);

  const handleSearchButton = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleGetLocation = () => {
    setLocation({
      location: city,
      userLocation: !location.userLocation,
    });
  };

  const handleSearchLocation = (city) => {
    setLocation({ location: city, userLocation: location.userLocation });
    let newSearchArray = [...search];
    if (newSearchArray.includes(city)) {
      setShowModal(false);
      return;
    } else {
      newSearchArray = [...search, city].reverse();
      setSearch(newSearchArray);
      setShowModal(false);
    }
  };

  const handlePrevSearch = (e) => {
    setLocation({
      location: e.target.textContent,
      userLocation: location.userLocation,
    });
    setShowModal(false);
  };

  const handleConvert = (data) => {
    setUnit(data);
  };

  return (
    <div className="container">
      {!loading && (
        <SearchBar
          weatherData={currentWeather}
          city={city}
          onHandleModal={handleSearchButton}
          onGetLocation={handleGetLocation}
          unit={unit}
        />
      )}
      {showModal && (
        <Modal
          onClose={handleCloseModal}
          onSearch={handleSearchLocation}
          onPrevSearch={handlePrevSearch}
          searches={search}
        />
      )}
      {!loading && (
        <MainWeather
          weatherHighlights={currentWeather}
          forecast={forecast}
          onConvert={handleConvert}
          unit={unit}
        />
      )}
    </div>
  );
}

export default App;
