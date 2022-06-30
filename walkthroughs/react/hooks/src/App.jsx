import "./App.css";
import { Counter as CounterClass } from "./CounterClass";
import { Counter as CounterFunc } from "./CounterFunc";
import { FilmsList } from "./FilmsList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hooks</h1>
        <hr />
        <FilmsList />
        <hr />
        <CounterClass />
        <CounterFunc />
      </header>
    </div>
  );
}

export default App;
