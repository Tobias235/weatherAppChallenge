import styles from "./SearchBar.module.css";
import Button from "../UI/Button";
import ImageFilter from "../utilities/ImageFilter";

const SearchBar = (props) => {
  const image = ImageFilter(props.weatherData.icon);
  const date = new Date();
  const dateArray = date.toDateString().split(" ");
  const showDate = {
    day: dateArray[0].toString(),
    date: dateArray[2].toString(),
    month: dateArray[1].toString(),
  };

  const city = props.city ? props.city : "Stockholm";

  const currentTemp = props.weatherData.temperature;
  const unit = props.unit === "°F" ? true : false;
  const temp = unit ? currentTemp * 1.8 + 32 : currentTemp;

  return (
    <div className={styles.searchBar}>
      <div className={styles.cloudBackground}></div>
      <div className={styles.searchBarContainer}>
        <div className={styles.btnContainer}>
          <button onClick={props.onHandleModal} className={styles.searchBtn}>
            Search for places
          </button>
          <Button className={styles.geoLocation}>
            <span className="material-icons">my_location</span>
          </Button>
        </div>
        <img
          src={require(`../assets/${image}`).default}
          alt="current weather"
        />
        <h1>
          <span className={styles.searchBarTemp}>{temp.toFixed(0)}</span>
          {props.unit}
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
          <span>{city}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
