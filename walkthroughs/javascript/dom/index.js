console.log("Hello World!");

let resultDisplay = document.querySelector("#result");
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let form = document.querySelector("form");
let op = document.querySelector("#op");

class Calculator {
  result = 0;

  add(a, b) {
    let res;

    if (b == undefined || isNaN(b)) {
      res = this.result + a;
    } else {
      res = a + b;
    }

    this.result = res;
    return this.result;
  }

  subtract(a, b) {
    let res;

    if (b == undefined || isNaN(b)) {
      res = this.result - a;
    } else {
      res = a - b;
    }

    this.result = res;
    return this.result;
  }

  multiply(a, b) {
    let res;

    if (b == undefined || isNaN(b)) {
      res = this.result * a;
    } else {
      res = a * b;
    }

    this.result = res;
    return this.result;
  }

  divide(a, b) {
    let res;

    if (b == undefined || isNaN(b)) {
      res = this.result / a;
    } else {
      res = a / b;
    }

    this.result = res;
    return this.result;
  }

  display() {
    return this.result;
  }
}

let calculator = new Calculator();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let a = parseFloat(num1.value);
  let b = parseFloat(num2.value);

  resultDisplay.textContent = calculator[op.value](a, b);

  num1.value = "";
  num1.focus();
  num2.value = "";
});
