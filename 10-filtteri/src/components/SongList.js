import Song from "./Song";

const SongList = ({ songs }) => {
  return (
    <div className="flex-auto overflow-y-auto w-full">
      {songs.map(({ name, artist, year }, index) => {
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
