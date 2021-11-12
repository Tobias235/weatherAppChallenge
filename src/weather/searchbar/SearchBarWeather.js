import { Fragment } from "react";

import ImageFilter from "../../utils/ImageFilter";
import styles from "./SearchBarWeather.module.css";

const SearchBarWeather = (props) => {
  const image = ImageFilter(props.weatherData.weather[0].icon);
  const date = new Date();
  const dateArray = date.toDateString().split(" ");
  const showDate = {
    day: dateArray[0].toString(),
    date: dateArray[2].toString(),
    month: dateArray[1].toString(),
  };

  const city = props.city ? props.city : "Stockholm";

  const currentTemp = props.weatherData.temp;
  const unit = props.unit === "°F" ? true : false;
  const temp = unit ? currentTemp * 1.8 + 32 : currentTemp;
  return (
    <Fragment>
      <img
        src={require(`../../assets/${image}`).default}
        alt="current weather"
        className={styles.img}
      />
      <h1 className={styles.temp}>
        <span className={styles.searchBarTemp}>{temp.toFixed(0)}</span>
        {props.unit}
      </h1>
      <p className={styles.weatherDescription}>
        {props.weatherData.weather[0].description}
      </p>
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
        <span>{city}</span>
      </div>
    </Fragment>
  );
};

export default SearchBarWeather;
