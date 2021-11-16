import Card from "../../UI/Card";
import styles from "./Wind.module.scss";

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

  const unit = props.unit === "°F" ? true : false;
  const imperial = unit ? "mph" : "m/s";
  const speed = unit ? props.wind.speed * 2.237 : props.wind.speed;

  return (
    <Card className={styles.wind}>
      <p>Wind Status</p>
      <h1>
        <span>{speed.toFixed(2)} </span>
        {imperial}
      </h1>
      <div>
        <span style={style} className="material-icons">
          navigation
        </span>
        <span className={styles.direction}>{windDirection}</span>
      </div>
    </Card>
  );
};

export default Wind;
