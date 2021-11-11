import AirPressure from "./AirPressure";
import Humidity from "./Humidity";
import Visibilty from "./Visibility";
import Wind from "./Wind";
import styles from "./WeatherHighlights.module.css";

const WeatherHighlights = (props) => {
  const wind = {
    speed: props.weatherHighlights.wind_speed,
    direction: props.weatherHighlights.wind_deg,
  };
  const humidity = props.weatherHighlights.humidity;
  const visibility = props.weatherHighlights.visibility;
  const airPressure = props.weatherHighlights.pressure;
  return (
    <div className={styles.highlightsContainer}>
      <div className={styles.row}>
        <Wind wind={wind} unit={props.unit} />
        <Humidity humidity={humidity} />
      </div>
      <div className={styles.row}>
        <Visibilty visibility={visibility} unit={props.unit} />
        <AirPressure airPressure={airPressure} />
      </div>
    </div>
  );
};

export default WeatherHighlights;
