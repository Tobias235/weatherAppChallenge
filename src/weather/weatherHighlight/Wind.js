import Card from "../../UI/Card";
import styles from "./Wind.module.css";

const Wind = (props) => {
  console.log(props.wind);
  return (
    <Card className={styles.wind}>
      <p>Wind Status</p>
      <h1>
        <span className={styles.windSpeed}>{props.wind.speed}</span>m/s
      </h1>
      <div>
        <span>ICON</span> <span>WSW</span>
      </div>
    </Card>
  );
};

export default Wind;
