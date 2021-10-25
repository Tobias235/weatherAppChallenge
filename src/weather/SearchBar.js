import styles from "./SearchBar.module.css";
import picture from "../assets/Shower.png";

import Button from "../UI/Button";

const SearchBar = (props) => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.cloudBackground}></div>

      <div className={styles.searchBarContainer}>
        <div className={styles.btnContainer}>
          <button className={styles.searchBtn}>Search for places</button>
          <Button className={styles.geoLocation}>
            <span className="material-icons">my_location</span>
          </Button>
        </div>
        <img src={picture} alt="current weather" />
        <h1>
          <span className={styles.searchBarTemp}>15</span>°C
        </h1>
        <p>Shower</p>
        <div className={styles.searchBarDay}>
          <span>Today</span>
          <span>•</span>
          <span>Fri, 5 Jun</span>
        </div>
        <div className={styles.location}>
          <span className="material-icons">place</span>
          <span>Helsinki</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
