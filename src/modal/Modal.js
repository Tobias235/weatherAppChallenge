import styles from "./Modal.module.scss";
import ModalForm from "./ModalForm";
import SearchList from "./SearchList";

const Modal = (props) => {
  return (
    <div className={styles.searchModal}>
      <div className={styles.closeBtn}>
        <button type="button" onClick={props.onClose}>
          <span className="material-icons">close</span>
        </button>
      </div>
      <ModalForm onSearch={props.onSearch} />
      <SearchList onPrevSearch={props.onPrevSearch} />
    </div>
  );
};

export default Modal;
