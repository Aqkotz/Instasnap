import './App.css';
import TileRegion from "./TileRegion.js";
import TeamsRegion from "./TeamsRegion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="subtitle">Organize your friends into teams!</h2>
        <h5 className="nameTitle">Drag and drop the tiles to arrange the teams.</h5>
        <TeamsRegion/>
        <TileRegion/>
      </header>
    </div>
  );
}

export default App;
