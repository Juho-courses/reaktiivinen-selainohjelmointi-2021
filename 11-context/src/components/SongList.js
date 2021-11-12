import { useContext } from "react";
import { AppContext } from "../app-context";
import Song from "./Song";

const SongList = () => {
  const [state] = useContext(AppContext);

  return (
    <div className="flex-auto overflow-y-auto w-full">
      {state.filteredSongs.map(({ name, artist, year }, index) => {
        return (
          <Song
            key={name + "-" + index}
            name={name}
            artist={artist}
            year={year}
          />
        );
      })}
    </div>
  );
};

export default SongList;
