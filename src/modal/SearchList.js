import styles from "./SearchList.module.css";

const SearchList = (props) => {
  const searchArray = JSON.parse(localStorage.getItem("SearchesList"));

  return (
    <ul className={styles.searchOptionList}>
      {searchArray.map((search) => {
        return (
          <li
            className={styles.listOption}
            onClick={props.onPrevSearch}
            key={Math.random()}
          >
            {search}
          </li>
        );
      })}
    </ul>
  );
};

export default SearchList;
