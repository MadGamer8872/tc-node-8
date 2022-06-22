// Primitive Data Types
// // undefined
// // null
// // number
// // boolean
// // string
// // bigint
// // symbol
// Structured Data Types
// // objects
// // functions*

let name = "Ben";

let obj = {
  name: "Ben",
};

let func = function (name) {
  console.log(name);
};

// Passed by Value vs Passed by Reference Data Types

// Primitives are passed by value
let a = 7;
let b = a; // a is 7, so that value is copied and assigned to b
a = 8;

console.log(b); // still 7

// Structured data types are passed by reference
let x = {
  value: 7,
};

let y = x; // stores the address to the object in memory, aka the same object not a copy

x.value = 8;

console.log(y.value); // 8

let firstName = "ben";

function capitalize(name) {
  return name[0].toUpperCase() + name.slice(1);
}

capitalize(firstName);

let person = {
  firstName: "ben",
  city: "Birmingham",
};

function capitalizeName(person) {
  return person.firstName[0].toUpperCase() + person.firstName.slice(1);
}

capitalizeName(person); // returns "Ben" without mutating the parameter object

// Parsing/Manipulating Strings and Arrays
let names = ["ben", "cam", "seth"];

let lastName = "bryant";

lastName[0]; // "b"

lastName[0].toUpperCase() + lastName.slice(1); // "B" + "ryant" => "Bryant"

// using a for loop

for (let i = 0; i < names.length; i++) {
  console.log(names[i][0].toLowerCase() + names[i].slice(1));
}

// vs the array forEach

names.forEach((name) => {
  if (name.length > 2) {
    console.log(`${name} includes an 'e': ${name.includes("e")}`);
  }
});
