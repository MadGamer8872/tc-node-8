"use strict";
let guess = prompt("Give me a number");

class InvalidNumberError extends Error {
  name = "InvalidNumberError";

  constructor(msg, invalidValue) {
    super(msg);

    this.value = invalidValue;
  }
}

try {
  guess = parseInt(guess);

  if (isNaN(guess)) {
    throw new InvalidNumberError("Not a valid number", guess);
  }

  if (guess > 5) {
    alert("Too high");
  } else if (guess < 5) {
    alert("Too low");
  } else {
    alert("Congrats");
  }
} catch (err) {
  if (err instanceof InvalidNumberError) {
    alert(err.message);
  } else {
    console.error(err);
    alert("Something went wrong. Try again with a different value.");
  }
}

console.log("After value initialization.");
