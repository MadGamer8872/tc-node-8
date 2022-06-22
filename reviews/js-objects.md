# Reviews: JS Objects

## Arrays

Store multiple values within a single structure that can be stored in a variable

_Zero indexed_, meaning item 1 is a index 0, etc

Often representing a list of items

## Objects

Consists of property/value pairs

```js
{
    name: "Ben",
    city: "Birmingham"
}
```

## Creating Objects and Arrays

1. Literal Syntax
   - Object `{}`
   - Array `[]`

## Accessing Object Values

1. Bracket Notation
   - `users[0]` - return the value at index 0
2. Dot Notation
   - `users.length` - return the number of items in an array

Which to use?

Must use bracket notation if:

1. Invalid property name that you are trying to access (ex: "first name", 0, etc)
2. If the property name is stored in a variable

## Methods

A function that is assigned to an object property

```js
let person = {
  name: "Ben",
  greet: function (name) {
    console.log(`Hello ${name}!`);
  },
};

person.greet("Seth"); // prints "Hello Seth!"
```

## `this`

Refers to the containing scope (often an object structure) upon execution

```js
function greet(name) {
  console.log(`Hello ${name}! My name is ${this.name}.`);
}

let person = {
  name: "Ben",
  greet,
};

person.greet("Seth"); // Prints "Hello Seth! My name is Ben."
```
