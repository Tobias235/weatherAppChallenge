import Button from "../UI/Button";
import WeatherForecast from "../UI/WeaterForecast";
import styles from "./MainWeather.module.css";
import WeatherHighlights from "./WeatherHighlights";

const MainWeather = (props) => {
  return (
    <div className={styles.mainWeather}>
      <div className={styles.mainContainer}>
        <div className={styles.btnContainer}>
          <Button>C</Button>
          <Button>F</Button>
        </div>
        <div className={styles.forecastContainer}>
          <WeatherForecast></WeatherForecast>
          <WeatherForecast></WeatherForecast>
          <WeatherForecast></WeatherForecast>
          <WeatherForecast></WeatherForecast>
          <WeatherForecast></WeatherForecast>
        </div>
        <h1 className={styles.highlightTitle}>Today's Highlights</h1>
        <div className={styles.weatherHighlights}>
          <WeatherHighlights className={styles.highlight}>
            <p>Wind Status</p>
            <h1>7 mph</h1>
            <div>
              <span>ICON</span> <span>WSW</span>
            </div>
          </WeatherHighlights>
          <WeatherHighlights className={styles.highlight}>
            <p>Humidity</p>
            <h1>84%</h1>
            <input />
          </WeatherHighlights>
        </div>
        <div className={styles.weatherHighlightsLower}>
          <WeatherHighlights className={styles.lowerHighlight}>
            <p>Visiblity</p>
            <h1>6.4 miles</h1>
          </WeatherHighlights>
          <WeatherHighlights className={styles.lowerHighlight}>
            <p>Air Pressure</p>
            <h1>998 mb</h1>
          </WeatherHighlights>
        </div>
      </div>
    </div>
  );
};

export default MainWeather;
