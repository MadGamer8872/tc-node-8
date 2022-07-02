import "./App.css";
import { Component } from "react";
import Box from "./components/Box";

class App extends Component {
  constructor(props) {
    super(props);

    const BOX_COUNT = 24;
    const BOXES = new Array(BOX_COUNT);

    for (let i = 0; i < BOXES.length; i++) {
      BOXES[i] = {
        id: i + 1,
        color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`,
      };
    }

    // set default state
    this.state = {
      boxes: BOXES,
    };

    // bind methods to this
    this.handleClick = this.handleClick.bind(this);
  }

  getRandomColor() {
    return Math.round(Math.random() * 255);
  }

  handleClick(event) {
    let updatedBoxes = this.state.boxes.map((box) => {
      if (box.id == event.target.id) {
        box.color = `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`;
      }

      return box;
    });

    this.setState({ boxes: updatedBoxes });
  }

  render() {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>React: State and Props</h1>
        <div className="App">
          {this.state.boxes.map((box) => {
            return (
              <Box
                key={box.id}
                id={box.id}
                color={box.color}
                onClick={this.handleClick}
              />
            );
          })}
        </div>
      </main>
    );
  }
}

export default App;
