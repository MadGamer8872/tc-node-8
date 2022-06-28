import logo from "./logo.svg";
import "./App.css";
import Button from "./shared/Button";
import { Component } from "react";

// Rendered List
// Array of jsx elements

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0, // 0 is the initial state for count
      names: ["Frodo", "Bilbo", "Sam"],
    };

    this.incrementValue = 1;
    this.decrementValue = 1;
  }

  onAdd = () => {
    // this.state.count += this.incrementValue; WRONG
    this.setState({ count: this.state.count + this.incrementValue });
  };

  onDelete = () => {
    // this.state.count -= this.decrementValue; WRONG
    this.setState({ count: this.state.count - this.decrementValue });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {this.state.names.map((name, i) => {
              return <li key={name + i}>{name}</li>;
            })}
          </ul>
          <p>{this.state.count}</p>
          <Button onClick={this.onAdd}>Add</Button>
          <Button onClick={this.onDelete}>Delete</Button>
        </header>
      </div>
    );
  }
}

export default App;
