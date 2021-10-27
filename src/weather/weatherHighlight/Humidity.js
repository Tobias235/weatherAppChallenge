import Card from "../../UI/Card";
import styles from "./Humidity.module.css";

const Humidity = (props) => {
  return (
    <Card className={styles.humidity}>
      <p>Humidity</p>
      <h1>
        <span className={styles.windSpeed}>84</span>%
      </h1>
      <input />
    </Card>
  );
};

export default Humidity;
