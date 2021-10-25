import Card from "../../UI/Card";
import styles from "./AirPressure.module.css";

const AirPressure = (props) => {
  return (
    <Card className={styles.airPressure}>
      <p>Air Pressure</p>
      <h1>
        <span>998</span>mb
      </h1>
    </Card>
  );
};

export default AirPressure;
