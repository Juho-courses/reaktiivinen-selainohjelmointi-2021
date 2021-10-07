const Song = ({ song, artist, year }) => {
  return (
    <div style={{ border: "1px solid gray" }}>
      <div>{song}</div>
      <div>
        {artist}, {year}
      </div>
      <div>
        <input type="button" value="edit" />
        <input type="button" value="delete" />
      </div>
    </div>
  );
};

export default Song;
