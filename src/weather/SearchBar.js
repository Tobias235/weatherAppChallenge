import styles from "./SearchBar.module.css";
import SearchBarBtns from "./searchbar/SearchBarBtns";
import SearchBarWeather from "./searchbar/SearchBarWeather";

const SearchBar = (props) => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.cloudBackground}></div>
      <div className={styles.searchBarContainer}>
        <SearchBarBtns
          onHandleModal={props.onHandleModal}
          onGetLocation={props.onGetLocation}
        />
        <SearchBarWeather
          weatherData={props.weatherData}
          unit={props.unit}
          city={props.city}
        />
      </div>
    </div>
  );
};

export default SearchBar;
