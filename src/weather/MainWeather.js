import Button from "../UI/Button";
import WeatherForecast from "../UI/WeaterForecast";
import styles from "./MainWeather.module.css";
import WeatherHighlights from "./WeatherHighlights";

const MainWeather = (props) => {
  const handleChangeUnit = (e) => {
    props.onConvert(e.target.textContent);
  };

  const stylingF = props.unit === "°F" ? styles.active : null;
  const stylingC = props.unit === "°C" ? styles.active : null;

  return (
    <div className={styles.mainWeather}>
      <div className={styles.mainContainer}>
        <div className={styles.btnContainer}>
          <Button className={stylingC} onClick={handleChangeUnit}>
            °C
          </Button>
          <Button className={stylingF} onClick={handleChangeUnit}>
            °F
          </Button>
        </div>
        <div className={styles.forecastContainer}>
          <WeatherForecast forecast={props.forecast} unit={props.unit} />
        </div>
        <h1 className={styles.highlightTitle}>Today's Highlights</h1>
        <div className={styles.weatherHighlights}>
          <WeatherHighlights
            weatherHighlights={props.weatherHighlights}
            unit={props.unit}
          />
        </div>
      </div>
      <footer>
        <p>
          created by <a href="https://tobias235.github.io/">Tobias235</a> -
          devChallenges.io
        </p>
      </footer>
    </div>
  );
};

export default MainWeather;
