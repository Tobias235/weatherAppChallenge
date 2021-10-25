import Card from "./Card";
import styles from "./WeatherForecast.module.css";
import cloudy from "../assets/Snow.png";

const WeatherForecast = (props) => {
  return (
    <Card className={styles.forecastCard}>
      <p>Tomorrow</p>
      <img src={cloudy} alt="Weather symbol" />
      <div>
        <span>16°C</span>
        <span>11°C</span>
      </div>
    </Card>
  );
};

export default WeatherForecast;
