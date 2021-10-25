import Card from "../../UI/Card";
import styles from "./Visibility.module.css";

const Visibility = (props) => {
  return (
    <Card className={styles.visibility}>
      <p>Visibility</p>
      <h1>
        <span>6,4</span> Miles
      </h1>
    </Card>
  );
};

export default Visibility;
