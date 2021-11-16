import Button from "../../UI/Button";
import styles from "./SearchBarBtns.module.scss";

const SearchBarBtns = (props) => {
  return (
    <div className={styles.btnContainer}>
      <button onClick={props.onHandleModal} className={styles.searchBtn}>
        Search for places
      </button>
      <Button className={styles.geoLocation} onClick={props.onGetLocation}>
        <span className="material-icons">my_location</span>
      </Button>
    </div>
  );
};

export default SearchBarBtns;
