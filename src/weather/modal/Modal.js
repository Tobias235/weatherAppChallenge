import styles from "./Modal.module.css";
import SearchList from "./SearchList";

const Modal = (props) => {
  return (
    <div className={styles.searchModal}>
      <div className={styles.closeBtn}>
        <button type="button" onClick={props.onClose}>
          <span className="material-icons">close</span>
        </button>
      </div>
      <form className={styles.searchModalBtn} onSubmit={props.onSearch}>
        <input
          className={styles.input}
          type="text"
          placeholder="search location"
        />
        <button type="button" onClick={props.onSearch}>
          Search
        </button>
      </form>
      <SearchList searches={props.searches} />
    </div>
  );
};

export default Modal;
