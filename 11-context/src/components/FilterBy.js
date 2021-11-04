import { useContext } from "react";
import { AppContext } from "../app-context";

function FilterBy() {
  const [state, setState] = useContext(AppContext);

  const filterChange = (e) => {
    setState({ ...state, filterby: e.target.value });
  };

  const setSearchWord = (word) => {
    setState({ ...state, searchWord: word });
  };

  return (
    <div>
      <h3 className="text-lg">Filter by</h3>
      <input
        onChange={filterChange}
        type="radio"
        name="filter"
        id="name"
        value="name"
        checked={state.filterby === "name"}
      />
      <label className="font-light text-sm" htmlFor="name">
        Song
      </label>

      <input
        onChange={filterChange}
        type="radio"
        name="filter"
        id="artist"
        value="artist"
        checked={state.filterby === "artist"}
      />
      <label className="font-light text-sm" htmlFor="artist">
        Artist
      </label>

      <input
        onChange={filterChange}
        type="radio"
        name="filter"
        id="year"
        value="year"
        checked={state.filterby === "year"}
      />
      <label className="font-light text-sm" htmlFor="year">
        Year
      </label>

      <input
        type="text"
        value={state.searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
    </div>
  );
}

export default FilterBy;
