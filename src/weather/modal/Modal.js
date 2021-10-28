import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={styles.searchModal}>
      <div className={styles.closeBtn}>
        <button type="button" onClick={props.onClick}>
          <span className="material-icons">close</span>
        </button>
      </div>
      <div className={styles.searchModalBtn}>
        <input
          className={styles.input}
          type="text"
          placeholder="search location"
        />
        <button onClick={props.onSearch}>Search</button>
      </div>
      <div className={styles.searchOptionList}>
        <div className={styles.listOption}>
          <p>London</p>
        </div>
        <div className={styles.listOption}>
          <p>Barcelona</p>
        </div>
        <div className={styles.listOption}>
          <p>Long Beach</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
