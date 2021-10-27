import { useState } from "react";

import styles from "./SearchBar.module.css";
import picture from "../assets/Shower.png";

import Button from "../UI/Button";
import Modal from "./modal/Modal";

const SearchBar = (props) => {
  const [showModal, setShowModal] = useState(false);

  const date = new Date();
  const dateArray = date.toDateString().split(" ");
  const showDate = {
    day: dateArray[0].toString(),
    date: dateArray[2].toString(),
    month: dateArray[1].toString(),
  };

  const handleSearchButton = (e) => {
    setShowModal(true);
    console.log(props.weatherData);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.searchBar}>
      {showModal && <Modal onClick={handleCloseModal} />}
      <div className={styles.cloudBackground}></div>
      <div className={styles.searchBarContainer}>
        <div className={styles.btnContainer}>
          <button onClick={handleSearchButton} className={styles.searchBtn}>
            Search for places
          </button>
          <Button className={styles.geoLocation}>
            <span className="material-icons">my_location</span>
          </Button>
        </div>
        <img src={picture} alt="current weather" />
        <h1>
          <span className={styles.searchBarTemp}>
            {parseInt(props.weatherData.temperature)}
          </span>
          °C
        </h1>
        <p>{props.weatherData.weather}</p>
        <div className={styles.searchBarDay}>
          <span>Today</span>
          <span>•</span>
          <span>
            {showDate.day + ", "}
            {showDate.date} {showDate.month}
          </span>
        </div>
        <div className={styles.location}>
          <span className="material-icons">place</span>
          <span>{props.weatherData.city}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
