import { createContext, useState } from "react";

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

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
