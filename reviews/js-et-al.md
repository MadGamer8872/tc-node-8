# Reviews: JS et al

## Variables and Data Types

JS is _loosely_ and _dynammically_ typed. This means:

- you don't have to declare a variable with the type of data that it will hold/contain
- AND if the value can be changed, it can change to a different data type)

Declaration Keywords

1. `var`, function scoped, able to be reassigned
2. `let`, block scoped, able to be reassigned
3. `const`, block scoped, not able to be reassigned

## Operators

Operatations between _operators_ and _operands_

1. Unary 1:1
2. Binary 2:1
3. Ternary (Conditional Operator)

## Control Flow

Control flow refers to "decision making" in our code.

## Loop/Iterations

Used to repeat a code block until a condition is false

## Functions

Function values are _hoisted_, meaning that the function definitions are raised to the top/beginning of their containing scope

Higher-order Functions are functions that operator/act on other functions. Can be:

1. taking a function value as a parameter
2. returning a function value

## Objects

Objects are structures that can contain many values stored as key/value pairs

Arrays are objects that hold a list of items/elements. Use square brackets to create arrays with _literal syntax_.

Functions assigned to object properties are called _methods_

Access object properties with:

1. Dot Notation `obj.property`
2. Bracket Notation `obj["property"]`

## Scope

The time and place where variables are able to be accessed

Global Scope

Local Scopes

Code blocks created local scopes. They are either:

1. Function Scope (functions)
2. Block Scope (if, else if, else, switch, for, while, do/while, etc)

## DOM

_Document Object Model_ allows us to access html elements as objects in JavaScript

The global `document` object has useful properties and methods to access the dom

Listen for user events (clicks, key presses, mouse movements, scrolls, etc)

## Synchronous vs Asynchronous

Blocking vs non-blocking

Sequential vs non-sequential

Synchronous is sequential in that line 1 completes before line 2, etc

Asynchronous is non-sequential in that line 1 is initiated but line 2 is then initiated before line 1 finishes (most of the time)

Promises are objects that "promise" to do something with the result of an action

Promises are used to handle asynchronous operations

Promise consumers (`.then` and `.catch`) are handle the result (success or failure) of a promise
