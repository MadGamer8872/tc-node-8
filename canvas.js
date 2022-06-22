// Function declaration - this binding
// create a dynamic this binding

// Arrow Notation - this binding
// binds this to the context at DEFINITION

function greet() {
  console.log(`Hello! My name is ${this.name}`);
}

const greetArrow = () => {
  console.log(`Hello! My name is ${this.name}`);
};

console.log("Caller context is the script scope");

greet();

greetArrow();

let arr = [1, 2, 3, 4, 5];

let math = {
  value: 10,
  multiplyByLength(num) {
    console.log(this);
    return num * this.value;
  },
};

math.multiplyByLength = math.multiplyByLength.bind(math);

let result = arr.map((num, _, self) => num * self.length);

console.log(result);
