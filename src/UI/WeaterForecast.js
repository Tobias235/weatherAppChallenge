import Card from "./Card";
import styles from "./WeatherForecast.module.css";
import ImageFilter from "../utilities/ImageFilter";
import TemperatureUnitConverter from "../utilities/TemperatureUnitConverter";

const WeatherForecast = (props) => {
  const fiveForecast = props.forecast
    .filter((item, index) => index < 6)
    .filter((item, index) => index !== 0);
  const currentUnit = props.unit;

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextDay = tomorrow.toString().split(" ");

  const card = fiveForecast.map((forecast) => {
    const image = ImageFilter(forecast.weather[0].icon);
    const unitConverter = TemperatureUnitConverter(
      currentUnit,
      forecast.temp.min,
      forecast.temp.max
    );
    let showDate;
    const date = new Date(forecast.dt * 1000);
    const dateArray = date.toString().split(" ");
    if (nextDay[2] === dateArray[2]) {
      showDate = "Tomorrow";
    } else {
      showDate = `${dateArray[0]} ${dateArray[2]} ${dateArray[1]}`;
    }
    return (
      <Card className={styles.forecastCard} key={forecast.dt}>
        <p>{showDate}</p>
        <img
          src={require(`./../assets/${image}`).default}
          alt="Weather symbol"
        />
        <div>
          <span>
            {unitConverter.max.toFixed(0)}
            {currentUnit}
          </span>
          <span>
            {unitConverter.min.toFixed(0)}
            {currentUnit}
          </span>
        </div>
      </Card>
    );
  });
  return <div className={styles.dailyForecast}> {card} </div>;
};

export default WeatherForecast;
