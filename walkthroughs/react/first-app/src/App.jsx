import "./App.css";
import { Component } from "react";

class App extends Component {
  controller = new AbortController();

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      title: "",
      films: [],
    };
  }

  handleSearch = (e) => {
    this.setState({ title: e.target.value });
  };

  filterResultsJSX() {
    return this.state.films
      .filter((film) =>
        film.title.toLowerCase().includes(this.state.title.toLowerCase())
      )
      .map((film) => <li key={film.id}>{film.title}</li>);
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films", {
      signal: this.controller.signal,
    })
      .then((res) => res.json())
      .then((films) => {
        console.log(films);
        this.setState({ isLoaded: true, films });
      })
      .catch((err) => console.error(err));
  }

  componentWillUnmount(reason) {
    if (reason) this.controller.abort();
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <main>
          <h1>Studio Ghibli Films</h1>
          <input
            type="search"
            placeholder="Search"
            id="title"
            name="title"
            aria-label="Search Title"
            value={this.state.title}
            onChange={this.handleSearch}
          />
          <ul>{this.filterResultsJSX()}</ul>
        </main>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default App;
