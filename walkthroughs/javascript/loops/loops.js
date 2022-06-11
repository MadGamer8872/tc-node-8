// let base = parseInt(
//   prompt("What number do you want to a multiplication table of?")
// );
// let range = parseInt(prompt("What number should I stop at?"));

// if (!base) {
//   base = 1;
// }

// for (let i = 1; i <= range; i++) {
//   // loop body
//   console.log(`${base} x ${i} = ${base * i}`);
// }

// Written as a while loop
// let i = 1;

// while (i <= range) {
//   console.log(`${base} x ${i} = ${base * i}`);
//   i++;
// }

// Written as a do/while
// let i = 1;

// do {
//   console.log(`${base} x ${i} = ${base * i}`);
//   i++;
// } while (i <= range)

// let result = "";
// let character = "x";
// let length = 8;

// // "password"
// // "xxxxxxxx"

// for (let i = 1; i <= length; i++) {
//   result += "x";
// }

// console.log(result);

// let correctPassword = "password";
// let password;
// let attempts = 3;

// do {
//   password = prompt("Enter password:").toLowerCase();
//   attempts--;
// } while (password != correctPassword && attempts > 0);

// console.log("Logged in");
