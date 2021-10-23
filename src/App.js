import MainWeather from "./weather/MainWeather";
import SearchBar from "./weather/SearchBar";

function App() {
  return (
    <div className="container">
      <SearchBar />
      <MainWeather />
    </div>
  );
}

export default App;
