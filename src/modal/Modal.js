import { useRef } from "react";

import styles from "./Modal.module.css";
import SearchList from "./SearchList";

const Modal = (props) => {
  const cityInputRef = useRef();

  const searchHandler = (e) => {
    const enteredCity = cityInputRef.current.value;
    e.preventDefault();
    if (enteredCity.trim() === "") {
      console.log("error");
    }
    props.onSearch(enteredCity);
    cityInputRef.current.value = "";
  };
  return (
    <div className={styles.searchModal}>
      <div className={styles.closeBtn}>
        <button type="button" onClick={props.onClose}>
          <span className="material-icons">close</span>
        </button>
      </div>
      <form className={styles.searchModalBtn} onSubmit={searchHandler}>
        <input
          className={styles.input}
          type="text"
          placeholder="search location"
          ref={cityInputRef}
        />
        <button type="button" onClick={searchHandler}>
          Search
        </button>
      </form>
      <SearchList searches={props.searches} onPrevSearch={props.onPrevSearch} />
    </div>
  );
};

export default Modal;
