console.log("Before promise");

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let num = Math.round(Math.random() * 10);

    if (num % 2 == 0) {
      resolve(num);
    } else {
      reject(num);
    }
  }, Math.round(Math.random() * 10000));
});

promise
  .then((num) => {
    return { num, doubled: num * 2 };
  })
  .then((obj) => console.log(`${obj.num} doubled is ${obj.doubled}`))
  .catch((err) => {
    console.error(`${err} is odd`);
  });
