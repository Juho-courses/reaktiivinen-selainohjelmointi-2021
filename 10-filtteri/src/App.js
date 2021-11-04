import { useState, useEffect } from "react";
import AddSong from "./components/AddSong";
import FilterBy from "./components/FilterBy";
import SongList from "./components/SongList";
import Title from "./components/Title";
import TopSection from "./components/TopSection";

function App() {
  const [songs, setSongs] = useState([
    { name: "biisi 1", artist: "esittäjä 1", year: "2001" },
    { name: "biisi 2", artist: "esittäjä 2", year: "2002" },
    { name: "biisi 3", artist: "esittäjä 3", year: "2003" },
  ]);

  const add_song = (song) => {
    setSongs([...songs, song]);
  };

  const [searchWord, setSearchWord] = useState("");
  const [filterby, setFilterby] = useState("name");
  const [filteredSongs, setFilteredSongs] = useState(songs);

  useEffect(() => {
    // console.log({ searchWord });
    // console.log({ filterby });

    // jos ei hakua, filtersongs -> songs
    if (searchWord === "") {
      setFilteredSongs(songs);
    }
    // jos haku, filteredsongs -> haun mukainen tulos
    else {
      let filtered = songs.filter((song) => {
        return (
          song[filterby]
            .toString()
            .toLowerCase()
            .indexOf(searchWord.toLowerCase()) !== -1
        );
      });
      setFilteredSongs(filtered);
    }
  }, [searchWord, filterby, songs]);

  return (
    <div className="flex flex-row h-screen bg-gray-100">
      <div className="w-64 bg-gray-300 p-4 flex flex-col space-y-4">
        <Title appname="SongApp2" />

        <FilterBy
          searchWord={searchWord}
          setSearchWord={setSearchWord}
          filterby={filterby}
          setFilterby={setFilterby}
        />

        <AddSong saveSong={add_song} />
      </div>

      <div className="flex flex-row flex-auto bg-gray-100 rounded-tl-xl border-l shadow-xl">
        <div className="flex flex-col w-full">
          <TopSection />
          <SongList songs={filteredSongs} />
        </div>
      </div>
    </div>
  );
}

export default App;
