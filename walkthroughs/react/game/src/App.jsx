import "./App.css";
import { Component } from "react";
import Answer from "./Answer";

class App extends Component {
  controller = new AbortController();

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      films: [],
      selectedFilmIdx: 0,
      guess: "",
      feedback: "",
    };
  }

  componentDidMount = async () => {
    let res = await fetch("https://ghibliapi.herokuapp.com/films");
    let list = await res.json();

    this.setState({ films: list, isLoaded: true });
  };

  componentWillUnmount() {
    this.controller.abort();
  }

  handleGuess = () => {
    let correctTitle = this.state.films[this.state.selectedFilmIdx].title;

    let feedback;

    if (this.state.guess == correctTitle) {
      feedback = "Correct!";
    } else {
      feedback = `Incorrect.. The correct is ${correctTitle}.`;
    }

    this.setState({ feedback });

    setTimeout(() => {
      this.setState({
        guess: "",
        feedback: "",
        selectedFilmIdx: this.getRandomNumber(0, this.state.films.length - 1),
      });
    }, 3000);
  };

  getRandomNumber(min = 0, max = 1) {
    return Math.round(Math.random() * (max - min) + min);
  }

  render() {
    if (!this.state.isLoaded) {
      return <small>Loading...</small>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <p id="feedback">{this.state.feedback}</p>
          <Answer
            isShown={Boolean(this.state.feedback)}
            isCorrect={
              this.state.guess ==
              this.state.films[this.state.selectedFilmIdx].title
            }
            value={this.state.films[this.state.selectedFilmIdx].title}
          />
          {/* Place to display desc */}
          <p>{this.state.films[this.state.selectedFilmIdx].description}</p>
          {/* Place to guess */}
          <label htmlFor="filmGuess">Choose a flavor:</label>
          <input
            list="filmTitles"
            id="filmGuess"
            name="filmGuess"
            value={this.state.guess}
            onChange={(e) => this.setState({ guess: e.target.value })}
          />

          <datalist id="filmTitles">
            {this.state.films.map(({ id, title }) => (
              <option key={id} value={title} />
            ))}
          </datalist>

          <button onClick={this.handleGuess}>Guess</button>
        </header>
      </div>
    );
  }
}

export default App;
