const Song = () => {
  return (
    <div style={{ border: "1px solid gray" }}>
      <div>Biisin nimi</div>
      <div>Esittäjä, Julkaisuvuosi</div>
      <div>
        <input type="button" value="edit" />
        <input type="button" value="delete" />
      </div>
    </div>
  );
};

export default Song;
