import Card from "../../UI/Card";
import styles from "./Visibility.module.css";

const Visibility = (props) => {
  const km = props.visibility / 1000;
  return (
    <Card className={styles.visibility}>
      <p>Visibility</p>
      <h1>
        <span>{km}</span> km
      </h1>
    </Card>
  );
};

export default Visibility;
