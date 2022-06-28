import logo from "./logo.svg";
import "./App.css";
import Button from "./shared/Button";
import { Component } from "react";
import ListGroup from "./shared/ListGroup";
import ListItem from "./shared/ListItem";

// Rendered List
// Array of jsx elements

// Handling Input
// // Controlled Inputs
// // Input values are mapped/controlled by state

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: ["Nap", "Eat", "Code"],
      task: "",
    };
  }

  onAdd = (event) => {
    event.preventDefault();

    let updatedTasks = [...this.state.tasks, this.state.task];

    this.setState({ tasks: updatedTasks, task: "" });
  };

  onDelete = (selectedTask) => {
    let updatedTasks = this.state.tasks.filter((task) => task !== selectedTask);

    this.setState({ tasks: updatedTasks });
  };

  handleInput = (event) => {
    this.setState({ task: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.onAdd}>
            <label htmlFor="task">New Task</label>
            <input
              type="text"
              name="task"
              id="task"
              value={this.state.task}
              onChange={this.handleInput}
            />
            <Button type="submit">Add</Button>
          </form>
          <ListGroup>
            {this.state.tasks.map((task, i) => {
              return (
                <ListItem key={task + i}>
                  <span>{task}</span>
                  <Button onClick={(event) => this.onDelete(task)}>X</Button>
                </ListItem>
              );
            })}
          </ListGroup>
        </header>
      </div>
    );
  }
}

export default App;
