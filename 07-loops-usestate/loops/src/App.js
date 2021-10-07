import AddSong from "./components/AddSong";
import FilterBy from "./components/FilterBy";
import SongList from "./components/SongList";
import Title from "./components/Title";

function App() {
  return (
    <div>
      <Title appname="SongApp2" />

      <FilterBy />

      <AddSong />

      <SongList />
    </div>
  );
}

export default App;
