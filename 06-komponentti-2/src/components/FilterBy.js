function FilterBy() {
  return (
    <div>
      <h3>Filter by</h3>
      <input type="radio" name="filter" id="song" value="song" />
      <label htmlFor="song">Song</label>

      <input type="radio" name="filter" id="artist" value="artist" />
      <label htmlFor="artist">Artist</label>

      <input type="radio" name="filter" id="year" value="year" />
      <label htmlFor="year">Year</label>

      <input type="text" />
    </div>
  );
}

export default FilterBy;
