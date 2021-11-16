import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      className={`${styles.btn} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
