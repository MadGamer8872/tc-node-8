import "./App.css";
import { Component } from "react";

const CW_URL = "https://www.codewars.com/api/v1/users";
const CW_USER = "Bryantellius";

// Rendered List
// Array of jsx elements

// Handling Input
// // Controlled Inputs
// // Input values are mapped/controlled by state

class App extends Component {
  controller = new AbortController();

  constructor(props) {
    super(props);

    this.state = {
      user: {},
      hasLoaded: false,
    };
  }

  fetchUser = async (username) => {
    try {
      let res = await fetch(CW_URL + `/${username}`, {
        signal: this.controller.signal,
      });
      let { clan, name, honor, ranks } = await res.json();

      return { clan, username, name, honor, ranks };
    } catch (e) {
      console.error(e);
      return { username, status: "No user data" };
    }
  };

  componentDidMount = async () => {
    let user = await this.fetchUser(CW_USER);
    this.setState({ user, hasLoaded: true });
  };

  componentWillUnmount() {
    this.controller.abort();
  }

  render() {
    if (!this.state.hasLoaded) {
      return <h1>Loading...</h1>;
    } else
      return (
        <div className="App">
          <header className="App-header">
            <h1>
              {this.state.user.name}, {this.state.user.honor}
            </h1>
          </header>
        </div>
      );
  }
}

export default App;
