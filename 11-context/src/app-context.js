import { createContext, useEffect, useState } from "react";

const AppContext = createContext([{}, () => {}]);

const AppProvider = ({ children }) => {
  let songs = [
    { name: "biisi 1", artist: "esittäjä 1", year: "2001" },
    { name: "biisi 2", artist: "esittäjä 2", year: "2002" },
    { name: "biisi 3", artist: "esittäjä 3", year: "2003" },
  ];
  const [state, setState] = useState({
    songs: songs,
    filteredSongs: songs,
    filterby: "name",
    searchWord: "",
  });

  useEffect(() => {
    // jos ei hakua, filtersongs -> songs
    if (state.searchWord === "") {
      setState({ ...state, filteredSongs: state.songs });
    }
    // jos haku, filteredsongs -> haun mukainen tulos
    else {
      let filtered = state.songs.filter((song) => {
        return (
          song[state.filterby]
            .toString()
            .toLowerCase()
            .indexOf(state.searchWord.toLowerCase()) !== -1
        );
      });
      setState({ ...state, filteredSongs: filtered });
    }
  }, [state.searchWord, state.filterby, state.songs]);

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
