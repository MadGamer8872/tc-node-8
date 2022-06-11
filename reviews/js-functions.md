# Reviews: JS Functions

A code block that you can call on over and over again by name, with the functionality of passing different values as arguments each call.

Function values can be assigned to variables

## Syntax

- `function` keyword
- an identifier, or name
  - adhere to variable naming rules
- parameter list denoted by `()` (also called _arguments_ or _inputs_)
  - adhere to variable naming rules
  - can have 0 or more parameters
  - parameters can have default values, ex: `function name(x = 1, y = 2) {}`
- function body denoted by `{}`

Example:

```js
function greet(name) {
  console.log(`Hello ${name}`);
}
```

## Creating a Function

1. Function Declaration
   - uses the `function` keyword
2. Assignment to a Variable
   - specifically assigned to a variable
   - the function takes the name of the variable

## Scope

Visibility or containment of locally defined variables.

One way, or lexical, nature where inner scopes can access outer scopes, but outer scopes cannot access inner scopes.

## Recursion

When a function that calls itself.

## Closure

Is when outer scoped variables are _bound_, able to be accessed, within an inner scoped function _after_ the outer scope no longer exists.

```js
let items = ["A", "B", "C"];

for (let item of items) {
  let li = document.createElement("li");
  li.textContent = item;

  const eventHandler = () => {
    alert(`This value is accessed through closure: ${item}`);
  };

  li.addEventListener("click", eventHandler);

  ul.appendChild(li);
}
```
