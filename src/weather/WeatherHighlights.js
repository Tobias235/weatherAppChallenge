import Card from "../UI/Card";
import styles from "./WeatherHighlights.module.css";

const WeatherHighlights = (props) => {
  return (
    <Card className={`${styles.weatherHighlights} ${props.className}`}>
      {props.children}
    </Card>
  );
};

export default WeatherHighlights;
