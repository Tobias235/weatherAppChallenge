import styles from "./Modal.module.scss";
import ModalForm from "./ModalForm";
import SearchList from "./SearchList";
import Card from "../UI/Card";

const Modal = (props) => {
  return (
    <Card className={styles.searchModal}>
      <div className={styles.closeBtn}>
        <button type="button" onClick={props.onClose}>
          <span className="material-icons">close</span>
        </button>
      </div>
      <ModalForm onSearch={props.onSearch} />
      <SearchList onPrevSearch={props.onPrevSearch} />
    </Card>
  );
};

export default Modal;
