let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Promise Rejected");
  }
});

// Promise Chaining I
// =====================
// p.then((message) => {
//   console.log("Promise 1 Success " + message);
//   // returns a promise
//   return p;
// })
//   .then((message) => {
//     // if promise 2 (the promise returned by the first "then" keyword) is resolved => log the message.
//     console.log("Promise 2 Sucesss " + message);
//   })
//   .catch((message) => {
//     console.log("ERROR? " + message);
//   });

// Promise Chaining II

function firstPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
}

function secondPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("SECOND PROMISE DONE!");
    }, 1000);
  });
}

// firstPromise()
//   .then((resolve, reject) => {
//     return reject(":(");
//   })
//   .then((message) => {
//     console.log("FULFILLED " + message);
//   })
//   .catch((message) => {
//     console.log("Rejected " + message);
//   });

//Then returns a new promise but its always pending.

//Then with a value (in this case "string") return
firstPromise()
  .then((message) => message + " with the first promise")
  .then((Finalmessage) =>
    console.log(Finalmessage + " also with the second promise")
  );

//Then with a promise return

firstPromise()
  .then(
    (message) =>
      new Promise((resolve, reject) =>
        // the first promise always returns true so this new promise will be resolved if the message is true otherwise its rejected
        // right now its false just to trigger the reject function
        message == false ? resolve("1") : reject("0")
      )
  )
  .then((finalMessage) => console.log("Promise Resolved: " + finalMessage))
  .catch((finalMessage) => console.log("Promise Rejected: " + finalMessage));
