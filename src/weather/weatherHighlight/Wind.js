import Card from "../../UI/Card";
import styles from "./Wind.module.css";

const Wind = (props) => {
  let compass = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
    "N",
  ];
  const windDirection = compass[(props.wind.direction / 22.5).toFixed(0)];
  const style = {
    transform: `rotate(${props.wind.direction}deg)`,
  };
  return (
    <Card className={styles.wind}>
      <p>Wind Status</p>
      <h1>
        <span className={styles.windSpeed}>{props.wind.speed}</span>m/s
      </h1>
      <div>
        <span style={style} className="material-icons">
          navigation
        </span>
        <span>{windDirection}</span>
      </div>
    </Card>
  );
};

export default Wind;
