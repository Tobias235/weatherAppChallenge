import WeatherForecast from "./mainWeather/WeaterForecast";
import styles from "./MainWeather.module.scss";
import WeatherHighlights from "./weatherHighlight/WeatherHighlights";
import MainWeatherBtns from "./mainWeather/MainWeatherBtns";
import Footer from "./mainWeather/Footer";

const MainWeather = (props) => {
  return (
    <div className={styles.mainWeather}>
      <div className={styles.mainContainer}>
        <MainWeatherBtns onConvert={props.onConvert} unit={props.unit} />
        <WeatherForecast forecast={props.forecast} unit={props.unit} />
        <h1 className={styles.highlightTitle}>Today's Highlights</h1>
        <WeatherHighlights
          weatherHighlights={props.weatherHighlights}
          unit={props.unit}
        />
      </div>
      <Footer />
    </div>
  );
};

export default MainWeather;
