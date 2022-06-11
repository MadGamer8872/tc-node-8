//  Functions
let num = 1;

function greet(person) {
  console.log(`Hello, ${person}!`);
}

// invoke/call a function
greet("Cameron");
greet("Seth");
greet("World");

// Add Example
function add(x = 0, y = 0) {
  return x + y;
}

let sum = add(1, 1, 2, 2); // 2

console.log(sum);

// Sentence Builder
function sentenceBuilder(subject, verb, object, noun) {
  return `${subject} ${verb} with ${object} and ${noun}.`;
}

let sentence = sentenceBuilder("Seth", "travelled", "laptop", "Goku");
let paragraph =
  sentence + " " + sentenceBuilder("Cameron", "played", "orange", "tree");

console.log(paragraph);

// Pure vs Side Effect

// Pure
add(1, 1); // 2
add(2, 2); // 4
add(1, 1); // 2
add(2, 2); // 4

// Side Effect
greet("Seth"); // undefined
greet("Ben"); // undefined

let x = 2;

function multiply(y) {
  let prod;
  if (y) {
    prod = num * y;
  }
  return prod; // throws reference error. prod is not defined
}

multiply(10); // 20

console.log(prod); // throws reference error. prod is not defined

multiply(12); // 24

x = 4;

multiply(10); // 40 - different than before

// Local Scopes
// 1. Function Scope
// 2. Block Scope

function greet2(name) {
  // determineGreeting hoisted to HERE
  let greeting = determineGreeting();
  console.log(`${greeting}, ${name}!`);

  function determineGreeting() {
    // has access to locally scoped name parameter
    if (name.length > 4) {
      return "Hello";
    } else {
      return "Hi";
    }
  }
}

// Closure
function counter() {
  let count = 0;
  return function increment() {
    // Increment is the inner scope
    // counter is the outer scope
    // Increment's scope encloses the variable count
    // and can access if after counter is executed
    count++;
    return count;
  };
}

let increment = counter();

increment(); // 1
increment(); // 2
increment(); // 3

let increment2 = counter();

increment2(); // 1
increment(); // 4

// Recursion

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// same as 

function countUp(n) {
  if (n > 0) {
    countUp(n - 1);
  }
  console.log(n);
}

countUp(10);

// Arrow Notation
// written with a lambda expression, or "fat arrow"

// function subtract(x, y) {
//     return x - y
// }

const subtract = (x, y) => x - y; // implicit return

// function sayHi(name) {
//     return `Hello, ${name}!`
// }

const sayHi = (name) => `Hello, ${name}!`; // implicit return with a single parameter (does not require parentheses)

const isEven = (n) => {
  return n % 2 == 0;
};
