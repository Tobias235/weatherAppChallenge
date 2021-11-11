import styles from "./SearchList.module.css";

const SearchList = (props) => {
  let searchArray = JSON.parse(localStorage.getItem("SearchesList"));
  let render;
  if (searchArray) {
    render = true;
    searchArray.reverse();
  }
  return (
    <ul className={styles.searchOptionList}>
      {render &&
        searchArray.map((search) => {
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
