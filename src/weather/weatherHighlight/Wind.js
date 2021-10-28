import Card from "../../UI/Card";
import styles from "./Wind.module.css";

const Wind = (props) => {
  return (
    <Card className={styles.wind}>
      <p>Wind Status</p>
      <h1>
        <span className={styles.windSpeed}>{props.wind.speed}</span>m/s
      </h1>
      <div>
        <span className="material-icons">navigation</span> <span>WSW</span>
      </div>
    </Card>
  );
};

export default Wind;
