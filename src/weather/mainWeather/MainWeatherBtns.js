import styles from "./MainWeatherBtns.module.scss";
import Button from "../../UI/Button";

const MainWeatherBtns = (props) => {
  const handleChangeUnit = (e) => {
    props.onConvert(e.target.textContent);
  };

  const stylingF = props.unit === "°F" ? styles.active : null;
  const stylingC = props.unit === "°C" ? styles.active : null;
  return (
    <div className={styles.btnContainer}>
      <Button className={stylingC} onClick={handleChangeUnit}>
        °C
      </Button>
      <Button className={stylingF} onClick={handleChangeUnit}>
        °F
      </Button>
    </div>
  );
};

export default MainWeatherBtns;
