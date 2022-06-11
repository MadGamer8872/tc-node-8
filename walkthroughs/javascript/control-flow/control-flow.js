// if/else
// based on a condition that evaluates to true or false
let movieLength = prompt("What is desired movie length (in minutes)?"); // prompt returns a string
movieLength = parseInt(movieLength); // returns a number

let greaterThan100 = 0;
let equalTo100 = 0;
let lessThan100 = 0;

if (movieLength > 100) {
  greaterThan100++;
} else if (movieLength == 100) {
  equalTo100++;
} else if (movieLength < 100 && movieLength >= 1) {
  lessThan100++;
} else {
  alert("You gave me an invalid answer for movie length minutes.");
}

alert(
  `Counts: Over 100 minutes - ${greaterThan100}, Equal to 100 minutes - ${equalTo100}, and Less 100 minutes - ${lessThan100}`
);

// lessThan100++;
// // same as
// lessThan100 += 1;
// // same as
// lessThan100 = lessThan100 + 1;

// switch
let answer = "parts";
let partsCounts = 0;
let allCounts = 0;
let weeklyCounts = 0;
let partsFinaleCounts = 0;

switch (answer) {
  case "parts":
    partsCounts++;
    break;
  case "all":
    allCounts++;
    break;
  case "weekly":
    weeklyCounts++;
    break;
  case "parts with finale":
    partsFinaleCounts++;
    break;
  default:
    console.log("you didn't answer correctly");
}
