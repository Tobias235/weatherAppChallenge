import styles from "./SearchList.module.scss";

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
            <li onClick={props.onPrevSearch} key={Math.random()}>
              {search}
            </li>
          );
        })}
    </ul>
  );
};

export default SearchList;
