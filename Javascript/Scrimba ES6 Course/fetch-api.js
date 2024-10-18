async function getData(num) {
  // Fetch method returns a promise
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${num}`
  );
  // Convert response body into json file, still returns a promise.
  const data = await response.json();
  // Returns a pending promise
  return data;
}
// callback function to extact data
let userData;
getData(1).then((data) => {
  userData = data;
  // Displays updated userData
  console.log(userData);
});

// use setTimeout to display the data. (If you don't use it it will return "undefined").
// Because in async programming the code below will be executed while waiting the result from async function
setTimeout(() => {
  console.log(userData);
}, 3000);

// or just display it in the then method.
