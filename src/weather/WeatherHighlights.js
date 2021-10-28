import AirPressure from "./weatherHighlight/AirPressure";
import Humidity from "./weatherHighlight/Humidity";
import Visibilty from "./weatherHighlight/Visibility";
import Wind from "./weatherHighlight/Wind";
import styles from "./WeatherHighlights.module.css";

const WeatherHighlights = (props) => {
  const wind = {
    speed: props.weatherHighlights.wind,
    direction: props.weatherHighlights.windDirection,
  };
  const humidity = props.weatherHighlights.humidity;
  const visibility = props.weatherHighlights.visibility;
  const airPressure = props.weatherHighlights.airPressure;
  return (
    <div className={styles.highlightsContainer}>
      <div className={styles.row}>
        <Wind wind={wind} />
        <Humidity humidity={humidity} />
      </div>
      <div className={styles.row}>
        <Visibilty visibility={visibility} />
        <AirPressure airPressure={airPressure} />
      </div>
    </div>
  );
};

export default WeatherHighlights;
