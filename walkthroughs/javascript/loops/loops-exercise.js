// Exercise 1: Ignore Even

for (let i = 1; i <= 99; i += 2) {
  console.log(i);
}

for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    continue;
  } else {
    console.log(i);
  }
}

for (let i = 1; i < 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

let o = 1;

while (o < 100) {
  if (o % 2 !== 0) {
    console.log(i);
  }

  o++;
}

let x = 1;

do {
  if (x % 2 !== 0) {
    console.log(x);
  }

  x++;
} while (x < 100);

// Exercise 2: FIZZBUZZ

for (let i = 1; i <= 100; i++) {
  let output = "";

  if (i % 3 == 0) {
    output += "FIZZ";
  }

  if (i % 5 == 0) {
    output += "BUZZ";
  }

  console.log(`${i} ${output}`);
}

for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    console.log(i, "FIZZBUZZ");
  } else if (i % 5 == 0) {
    console.log(i, "BUZZ");
  } else if (i % 3 == 0) {
    console.log(i, "FIZZ");
  }
}

for (let i = 1; i < 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i, "FIZZBUZZ");
  } else {
    if (i % 3 == 0) {
      console.log(i, "FIZZ");
    } else if (i % 5 == 0) {
      console.log(i, "BUZZ");
    } else {
      console.log(i);
    }
  }
}

for (let i = 1; i < 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FIZZBUZZ");
  } else {
    if (i % 3 == 0) {
      console.log("FIZZ");
    }

    if (i % 5 == 0) {
      console.log("BUZZ");
    }
  }
}

let y = 1;

while (y <= 100) {
  let output = "";

  if (y % 3 == 0) {
    output += "FIZZ";
  }

  if (y % 5 == 0) {
    output += "BUZZ";
  }

  console.log(`${y} ${output}`);

  y++;
}

let j = 1;

do {
  let output = "";

  if (j % 3 == 0) {
    output += "FIZZ";
  }

  if (j % 5 == 0) {
    output += "BUZZ";
  }

  console.log(`${j} ${output}`);

  j++;
} while (j <= 100);

// Exercise 4: Find Value

let numberToFind = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 1; i <= n; i++) {
  if (i == numberToFind) {
    console.log(`Found ${numberToFind}!`);
    break;
  }

  if (i == n) {
    console.log(`Did not find ${numberToFind} within 1-${n}..`);
  }
}

let foundValue;

for (let i = 1; i <= n && !foundValue; i++) {
  foundValue = i == numberToFind;
}

if (foundValue) {
  console.log(`Found ${numberToFind}!`);
} else {
  console.log(`Did not find ${numberToFind} within 1-${n}..`);
}

// Exercise 5: Custom FIZZBUZZ

// Math.round() => 5.56 => 6
// Math.random() => 0-0.9999...
// Math.random() * 10 => 0-9.9999...
// Math.random() * 10 + 2 => 2-11.9999...
// Math.random() * (max - min) + min => gives a value within a min and max range
// Math.random() * (10 - 5) + 5 => 5-9.9999... then with Math.round() => 5-10

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= end; i++) {
  let output = "";

  if (i % fizzDivisor == 0) {
    output += "FIZZ";
  }

  if (i % buzzDivisor == 0) {
    output += "BUZZ";
  }

  console.log(`${i} ${output}`);
}

console.log(fizzDivisor, buzzDivisor);
