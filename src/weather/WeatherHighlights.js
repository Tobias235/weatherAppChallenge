import AirPressure from "./weatherHighlight/AirPressure";
import Humidity from "./weatherHighlight/Humidity";
import Visibilty from "./weatherHighlight/Visibility";
import Wind from "./weatherHighlight/Wind";
import styles from "./WeatherHighlights.module.css";

const WeatherHighlights = (props) => {
  return (
    <div className={styles.highlightsContainer}>
      <div className={styles.row}>
        <Wind />
        <Humidity />
      </div>
      <div className={styles.row}>
        <Visibilty />
        <AirPressure />
      </div>
    </div>
  );
};

export default WeatherHighlights;
