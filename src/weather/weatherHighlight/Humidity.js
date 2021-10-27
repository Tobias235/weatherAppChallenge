import Card from "../../UI/Card";
import styles from "./Humidity.module.css";

const Humidity = (props) => {
  return (
    <Card className={styles.humidity}>
      <p>Humidity</p>
      <h1>
        <span className={styles.windSpeed}>{props.humidity}</span>%
      </h1>
      <div className={styles.percentage}>
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
      <progress value={props.humidity} max="100"></progress>
      <div className={styles.percentageSign}>
        <span>%</span>
      </div>
    </Card>
  );
};

export default Humidity;
