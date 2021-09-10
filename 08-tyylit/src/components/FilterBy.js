function FilterBy() {
  return (
    <div>
      <h3 className="text-lg">Filter by</h3>
      <input type="radio" name="filter" id="song" value="song" />
      <label className="font-light text-sm" htmlFor="song">
        Song
      </label>

      <input type="radio" name="filter" id="artist" value="artist" />
      <label className="font-light text-sm" htmlFor="artist">
        Artist
      </label>

      <input type="radio" name="filter" id="year" value="year" />
      <label className="font-light text-sm" htmlFor="year">
        Year
      </label>

      <input type="text" />
    </div>
  );
}

export default FilterBy;
