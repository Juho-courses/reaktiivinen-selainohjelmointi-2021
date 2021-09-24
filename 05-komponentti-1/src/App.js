import AddSong from "./components/AddSong";
import FilterBy from "./components/FilterBy";
import Song from "./components/Song";
import Title from "./components/Title";

function App() {
  return (
    <div>
      <Title />

      <FilterBy />

      <AddSong />

      <div>
        <Song />
        <Song />
        <Song />
      </div>
    </div>
  );
}

export default App;
