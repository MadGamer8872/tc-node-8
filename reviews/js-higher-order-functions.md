# Reviews: JS Higher-Order Functions

A function that operates on another function, by:

1. Taking a function value as a parameter (argument)
2. Returning a function value

Example:

```js
// Option 1
[1, 2, 3, 4, 5].map((num) => num * 2);

// Option 2
function greeting(msg) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}
```

## Iterating Over Objects

```js
console.log("Hello World!");

let veggies = ["eggplant", "carrots", "tomatoes", "potatoes", "celery"];

let hobbit = {
  name: "Frodo",
  age: 50,
};

// Access Every Value

// For
for (let i = 0; i < veggies.length; i++) {
  console.log(veggies[i]);
}

// For/in
// Iterates over the keys in an object
for (let property in veggies) {
  console.log(veggies[property]);
}

for (let property in hobbit) {
  console.log(hobbit[property]);
}

// For/of
// Iterates over the values in an iterable object
for (let value of veggies) {
  console.log(value);
}

// Won't work :/
// for (let value of hobbit) {
//   console.log(value);
// }
for (let value of Object.values(hobbit)) {
  // [ "Frodo", 50 ]
  console.log(value);
}

// Extra Object Methods
Object.values(hobbit); // return an array of values
// [ "Frodo", 50 ]
Object.keys(hobbit); // return an array of properties names
// [ "name", "age" ]
Object.entries(hobbit); // return an array of tuples (two-item arrays) made up of property/value pairs
// [ ["name", "Frodo"], ["age", 50] ]
```
