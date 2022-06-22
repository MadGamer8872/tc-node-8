// Sum of array of numbers
const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
  //   let sum = 0;

  // iterate over each value in the array
  // add each number to the sum
  //   arr.forEach((number) => {
  //     sum += number;
  //   });

  // Using the Array reduce method
  return arr.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(arraySum(numbers));
console.log(arraySum([1, 2, 3, 4, 5]));

// Exercise 2: Book
let favBook = {};

favBook.title = "The Lies of Lamora Locke";
favBook.author = "Scott Lynch";
favBook.pageCount = 650;
favBook.readCount = 1;

console.log(favBook);

function info() {
  return `${this.title} by ${this.author} is ${this.pageCount} page(s) and has been read ${this.readCount} time(s).`;
}

favBook.info = info;

console.log(favBook.info());

let favBook2 = {
  title: "Red Seas Under Red Skies",
  author: "Scott Lynch",
  pageCount: 700,
  readCount: 1,
  info,
};

console.log(favBook2.info());

// Exercise 3: Reverse every word in a sentence
let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(sentence) {
  // Identify the words based on spaces
  let words = sentence.split(" ");

  // Returns a new array after returning changed values per iteration
  let result = words.map((word) => {
    let letters = word.split(""); // ex "The" => [ "T", "h", "e"]
    letters.reverse(); // ex [ "e", "h", "T" ]
    return letters.join("");
  });

  return result.join(" ");
}

console.log(reverseWords(sentence));
console.log(reverseWords("My name is Ben"));
console.log(reverseWords("I am Ironman"));

// Exercise 4: CSV Conversion

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function csvConverter(data) {
  // Determine headers from the first row/line of the data
  // Split the header string to an array of headers
  let headers = data.slice(0, data.indexOf("\n")).split(","); // [ "name", "age" ]

  // Determine the row data
  let valuesList = data.slice(data.indexOf("\n") + 1).split("\n");

  const output = valuesList.map((row) => {
    // Seperate the values into array values
    let values = row.split(",");
    let obj = {};

    values.forEach((value, idx) => {
      if (idx < headers.length) {
        obj[headers[idx]] = value;
      } else {
        obj[`misc${idx - headers.length + 1}`] = value;
      }
    });

    return obj;
  });

  return output;
}

console.log(csvConverter(csvData));
console.log(
  csvConverter("name,city,occupation\nBen,Birmingham,Web Developer,Some Value")
);

// "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26"
// Headers: | name  | age |
//          | ----- | --- |
// Row ex:  | Frodo | 50  |
function converter(fileData) {
  // Split the fileData into rows based on every newline character
  let rows = fileData.split("\n"); // [ "name,age", "Frodo,50", ... ]
  // Split the first row, or headers, into individual strings based on the , delimiter
  let headers = rows[0].split(","); // [ "name", "age" ]

  let result = [];
  // Iterate over every content row
  for (let i = 1; i < rows.length; i++) {
    let obj = {};
    let data = rows[i].split(","); // ex [ "Frodo", 50 ]
    data.forEach((value, index) => {
      let headerName = headers[index]; // "name", "age", ...
      obj[headerName] = value;
    });
    result.push(obj);
  }

  return result;
}

console.log(converter(csvData));

function reduceConvert(fileData) {
  // Return an array of objects from a string of rows
  // Store headers
  // Store result
  let output = fileData.split("\n").reduce((output, row, index, arr) => {
    // Split row values into an array of values
    let values = row.split(",");
    // Detemine headers (first row)
    if (index == 0) {
      // Working with headers
      output.headers = values;
    } else {
      // Working with table data
      let obj = {};
      values.forEach((val, index) => {
        if (index < output.headers.length) {
          obj[output.headers[index]] = val;
        } else {
          obj[`misc${index - output.headers.length + 1}`] = val;
        }
      });

      if (!output.records) {
        output.records = [];
      }

      output.records.push(obj);
    }

    return output;
  }, {});

  console.log(output);

  return output.records;
}

console.log(reduceConvert(csvData));

// More Reduce

let scores = [1, 2, 3, 4, 5];

// Score Stats
// Avg, Max, Min

let stats = scores.reduce(
  (stats, score, index, arr) => {
    // Sum to Avg
    if (index != arr.length - 1) {
      stats.avg += score;
    } else {
      stats.avg = (stats.avg + score) / arr.length;
    }

    // Find Max
    if (stats.max == null || stats.max < score) {
      stats.max = score;
    }

    // Find Min
    if (stats.min == null || stats.min > score) {
      stats.min = score;
    }

    return stats;
  },
  { min: null, max: null, avg: 0 }
);

console.log(stats);

// Returning a function

function createGreeting(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
}

let sayHi = createGreeting("Hi");
let sayHello = createGreeting("Hello");
let sayHowdy = createGreeting("Howdy");

sayHi("Cam");
sayHello("Ben");
sayHowdy("Seth");

// Receiving a function as a parameter

scores.forEach(console.log);
