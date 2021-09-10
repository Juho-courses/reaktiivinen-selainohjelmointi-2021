import Song from "./Song";
import { useState } from "react";

const SongList = () => {
  const [songs] = useState([
    { song: "biisi 1", artist: "esittäjä 1", year: "2001" },
    { song: "biisi 2", artist: "esittäjä 2", year: "2002" },
    { song: "biisi 3", artist: "esittäjä 3", year: "2003" },
    { song: "biisi 3", artist: "esittäjä 3", year: "2003" },
    { song: "biisi 3", artist: "esittäjä 3", year: "2003" },
    { song: "biisi 3", artist: "esittäjä 3", year: "2003" },
    { song: "biisi 3", artist: "esittäjä 3", year: "2003" },
    { song: "biisi 3", artist: "esittäjä 3", year: "2003" },
  ]);

  return (
    <div className="flex-auto overflow-y-auto w-full">
      {songs.map(({ song, artist, year }, index) => {
        return (
          <Song
            key={song + "-" + index}
            song={song}
            artist={artist}
            year={year}
          />
        );
      })}
    </div>
  );
};

export default SongList;
