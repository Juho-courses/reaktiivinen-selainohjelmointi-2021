const AddSong = () => {
  return (
    <div>
      <h3>Add a song</h3>
      <div>
        <div>
          <label htmlFor="song">Song name</label>
          <input type="text" name="song" id="song" />
        </div>
        <div>
          <label htmlFor="artist">Artist name</label>
          <input type="text" name="artist" id="artist" />
        </div>
        <div>
          <label htmlFor="release">Release year</label>
          <input type="text" name="release" id="release" />
        </div>
      </div>
      <input type="button" value="Save" />
    </div>
  );
};

export default AddSong;
