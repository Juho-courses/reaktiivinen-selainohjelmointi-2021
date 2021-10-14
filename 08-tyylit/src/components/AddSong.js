const AddSong = () => {
  return (
    <div>
      <h3 className="text-lg">Add a song</h3>
      <div>
        <div>
          <label className="font-light text-sm" htmlFor="song">
            Song name
          </label>
          <input type="text" name="song" id="song" />
        </div>
        <div>
          <label className="font-light text-sm" htmlFor="artist">
            Artist name
          </label>
          <input type="text" name="artist" id="artist" />
        </div>
        <div>
          <label className="font-light text-sm" htmlFor="release">
            Release year
          </label>
          <input type="text" name="release" id="release" />
        </div>
      </div>
      <input className="btn" type="button" value="Save" />
    </div>
  );
};

export default AddSong;
