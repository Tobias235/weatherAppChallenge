import styles from "./SearchList.module.css";

const SearchList = (props) => {
  return (
    <ul className={styles.searchOptionList}>
      {props.searches.map((search) => {
        return (
          <li className={styles.listOption} onClick={props.onPrevSearch}>
            {search}
          </li>
        );
      })}
    </ul>
  );
};

export default SearchList;
