import { useState, useEffect } from "react";

import MainWeather from "./weather/MainWeather";
import SearchBar from "./weather/SearchBar";
import Modal from "./modal/Modal";
import useGetData from "./hooks/useGetData";

import GetUserLocation from "./utilities/GetUserLocation";

function App() {
  const [location, setLocation] = useState("stockholm");
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

  const handleSearchLocation = (city) => {
    setLocation(city);
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
    // fetchLocationCoords(e.target.textContent);
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
