import Card from "../../UI/Card";
import styles from "./AirPressure.module.scss";

const AirPressure = (props) => {
  return (
    <Card className={styles.airPressure}>
      <p>Air Pressure</p>
      <h1>
        <span>{props.airPressure}</span>mb
      </h1>
    </Card>
  );
};

export default AirPressure;
