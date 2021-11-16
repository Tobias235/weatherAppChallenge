import Card from "../../UI/Card";
import styles from "./Visibility.module.scss";

const Visibility = (props) => {
  const visibility = props.visibility;
  const unit = props.unit === "°F" ? true : false;
  const imperial = unit ? "miles" : "km";

  const distance = unit
    ? (visibility / 1609.344).toFixed(1)
    : visibility / 1000;
  return (
    <Card className={styles.visibility}>
      <p>Visibility</p>
      <h1>
        <span>{distance} </span> {imperial}
      </h1>
    </Card>
  );
};

export default Visibility;
