import Song from "./Song";

const SongList = () => {
  return (
    <div>
      <Song song="biisi 1" artist="esittäjä 1" year="2001" />
      <Song song="biisi 2" artist="esittäjä 2" year="2002" />
      <Song song="biisi 3" artist="esittäjä 2" year="2003" />
    </div>
  );
};

export default SongList;
