console.log("Hello World!");

class Player {
  constructor(name, marker) {
    this.name = name;
    this.marker = marker;
  }

  play(space) {
    console.log(`${this.name} places ${this.marker} on ${space}`);
  }
}

class TicTacToeGame {
  markers = ["X", "O"];

  constructor() {
    this.players = [];
    this.board = new Array(9).fill("_");
  }

  start() {
    alert("Welcome to Tic Tac Toe! You already know how to play.");

    this.markers.forEach((marker, i) => {
      let name = prompt(`Who will be player ${i + 1} and use ${marker}?`);

      this.players.push(new Player(name, marker));
    });

    console.log(this.players);
  }

  turn() {}
}

