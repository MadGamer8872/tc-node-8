export default class Calculator {
  result = 0;
  dictionary = {
    "+": "add",
    "-": "subtract",
    x: "multiply",
    "/": "divide",
  };

  calculate(num1, oper, num2) {
    console.log(this);

    let a, b;

    if (num1) {
      a = parseFloat(num1);
      b = parseFloat(num2);
    } else {
      a = this.result;
      b = parseFloat(num2);
    }

    return this[this.dictionary[oper]](a, b);
  }

  add(a, b) {
    this.result = a + b;
    return this.result;
  }

  subtract(a, b) {
    this.result = a - b;
    return this.result;
  }

  multiply(a, b) {
    this.result = a * b;
    return this.result;
  }

  divide(a, b) {
    this.result = a / b;
    return this.result;
  }
}
