import { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 33,
      char: String.fromCharCode(33),
    };
  }

  handleClick = () => {
    let count = this.state.count + 1;
    this.setState({ count, char: String.fromCharCode(count) });
  };

  render() {
    return (
      <div>
        <h2>{this.state.char}</h2>
        <button onClick={this.handleClick}>{this.state.count}</button>
      </div>
    );
  }
}
