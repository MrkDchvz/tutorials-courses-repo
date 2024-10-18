// Declare a promise
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Promise Rejected");
  }
});

console.log(p.then());
