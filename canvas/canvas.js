// Spread and Rest (gather)
// ... operator

// Instance of Iterable
let arr = [1, 2, 3, 4, 5];

// Iterator (consumes an iterable object)
for (let ele of arr) {
  console.log(ele * 2);
}

// Spread

// Example: Copy array values
let arrCopy = Array.from(arr);
// or
let arrCopy2 = [...arr];

// Example: Merging Objects
let details = {
  name: "Ben",
  city: "Birmingham",
};

let updatedDetails = {
  color: "Red",
  name: "Benjamin",
};

let mergedObj = {
  ...details,
  ...updatedDetails,
};

console.log(mergedObj.name.split(""));
console.log([...mergedObj.name]);

Object.entries(details); // returns [["name", "Ben"], ["city", "Birmingham"]]

// Rest (gather)

// Unknown number of arguments
function add(...nums) {
  return nums.reduce((sum, num) => sum + num, 0);
}

add(1, 1); // 2
add(1, 2, 3, 4, 5); // 15

console.log("Ben", false, null, undefined);

Math.min(1, 2, 3, 4, 5, 0); // 0
