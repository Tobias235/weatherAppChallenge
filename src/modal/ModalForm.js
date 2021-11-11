import { useRef } from "react";

import styles from "./ModalForm.module.css";

const ModalForm = (props) => {
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
  );
};

export default ModalForm;
