class Component {
  constructor(props) {
    this.props = props;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };

    this.render();
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    setTimeout(() => {
      this.increment();
    }, 3000);

    console.log(this.state.count);
  }
}

const app = new App();

// app.render();

function statelessApp() {
  let count = 1;

  function increment() {
    count++;
    statelessApp();
  }

  setTimeout(() => {
    increment();
  }, 3000);

  console.log(count);
}

// statelessApp()