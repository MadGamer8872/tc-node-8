// Objects

let roster = ["Ben", "Seth", "Cameron"]; // string array, length of 3

roster.length; // 3
// "Ben".length; // 3

roster[0]; // "Ben"
// "Ben"[0]; // "B"

roster[0] = "Benjamin";
// "Ben"[0] = "H"; won't work :/

roster[3] = "Cruz";

roster.length; // 4

// Tell me how many total characters are used to make up my roster names
let totalCharacters = 0;

for (let index = 0; index < roster.length; index++) {
  let name = roster[index];
  totalCharacters += name.length;
}

console.log(`Total: ${totalCharacters}`);

let user1 = {
  name: "Ben",
  character: "Toon Link",
  color: "Purple",
  isGood: false,
};

user1.name; // "Ben"

user1["color"]; // "Purple"

function play() {
  console.log(
    `${this.name} is playing smash with ${this.color} ${this.character}...`
  );
}

let players = [
  {
    name: "Ben",
    character: "Toon Link",
    color: "Purple",
    isGood: false,
    play,
  },
  {
    name: "Cruz",
    character: "Megaman",
    color: "blue",
    isGood: true,
    play,
  },
];

for (let i = 0; i < players.length; i++) {
  players[i].play();
}

// Primitive vs Objects Types

// Primitive String
// String Object

let fname = "Ben";
fname.length; // 3

let number = 12.9999;
number.toFixed(2); // "12.99"
