// Exercise 1: Guessing game

let magicNumber = 3;
let min = 1;
let max = 100;

// Get the user's guess
// Returns a string
let guessNumber = prompt(`Guess a number between ${min} and ${max}?`);

// Convert the guess to a number
guessNumber = parseInt(guessNumber);

// Validate Input (is it a number?)
if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
  console.log(
    `You didn't give me a valid number between ${min} and ${max} >:(`
  );
} else {
  // Game logic with valid input
  if (guessNumber == magicNumber) {
    console.log("Congrats! You guessed the magic number.");
  } else if (guessNumber > magicNumber) {
    console.log("Guess was too high :/. Try again.");
  } else {
    console.log("Guess was too low >:(. Try again.");
  }
}

// Exercise 2: Birth Season
let birthMonth = prompt("Please insert your birth month:"); // "JULY" => "july"

switch (birthMonth.toLowerCase()) {
  case "december":
  case "january":
  case "february":
    console.log("Winter");
    break;
  case "march":
  case "april":
  case "may":
    console.log("Spring");
    break;
  case "june":
  case "july":
  case "august":
    console.log("Summer");
    break;
  case "september":
  case "october":
  case "november":
    console.log("Fall");
    break;
  default:
    console.log("I don't recognize that month...");
}

// Exercise 3: Business Logic between Attire Codes
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
}

switch (colorId) {
  case "BL":
    color = "Black";
    break;
  case "BU":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);

let answer = "12";
let x = 4;
let y = 3;

if (x * y == answer) {
  console.log("If/Else: Correct");
} else {
  console.log("If/Else: Incorrect");
}

switch (true) {
  case typeof answer == "number":
    console.log("Correct input type...");
  case x * y == answer:
    console.log("Switch: Correct answer");
    break;
  default:
    console.log("Switch: Incorrect");
}
