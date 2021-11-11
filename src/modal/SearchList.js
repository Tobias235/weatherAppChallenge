import styles from "./SearchList.module.css";

const SearchList = (props) => {
  const searchArray = JSON.parse(localStorage.getItem("SearchesList"));
  let searches = searchArray.filter((item, index) => index < 5);
  searches.reverse();
  return (
    <ul className={styles.searchOptionList}>
      {searches.map((search) => {
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
