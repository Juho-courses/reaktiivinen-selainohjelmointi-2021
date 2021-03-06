const Song = ({ name, artist, year }) => {
  return (
    <div className="p-6  ml-3 my-3 bg-white rounded-xl shadow-md flex justify-between w-4/5">
      <div>
        <div className="text-xl font-medium text-black">{name}</div>
        <p className="text-gray-500">
          {artist}, {year}
        </p>
      </div>
      <div className="flex space-x-3">
        <input className="btn btn-blue" type="button" value="edit" />
        <input className="btn btn-red" type="button" value="delete" />
      </div>
    </div>
  );
};

export default Song;
