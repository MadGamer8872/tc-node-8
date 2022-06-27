import logo from "./logo.svg";
import "./App.css";
import Link from "./shared/Link";

function App() {
  let text = "React is awesome! This is text from a variable!!";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{text}</p>
        <Link /> {/* rather than Link() */}
        <Link />
      </header>
    </div>
  );
}

export default App;
