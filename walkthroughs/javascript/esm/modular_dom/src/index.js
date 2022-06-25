import Calculator from "./Calculator";

let num1 = "";
let oper = "";
let num2 = "";
let calculator = new Calculator();

const buttonListener = (event) => {
  let char = event.target.textContent;

  if (isNaN(parseInt(char)) && char != ".") {
    if (char == "=") {
      let result = calculator.calculate(num1, oper, num2);
      document.querySelector("#display").textContent = result;

      num1 = "";
      oper = "";
      num2 = "";
    } else {
      oper = char;
    }
  } else {
    if (oper.length > 0) {
      // second number
      num2 += char;
    } else {
      // first number
      num1 += char;
    }
  }
};

for (let btn of document.querySelectorAll("button")) {
  btn.onclick = buttonListener;
}
