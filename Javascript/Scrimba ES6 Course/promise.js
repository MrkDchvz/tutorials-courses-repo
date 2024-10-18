function fetchData(user) {
  const users = ["Rio", "Miyako", "Mari", "Ako", "Wakamo"];
  //   Returns a promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users.includes(user)) {
        resolve("User Found!");
      } else {
        reject("User Not Found!");
      }
    }, 3000);
  });
}

fetchData("Miyako")
  // If Fulfilled
  .then((res) => console.log(res))
  //   If Rejected
  .catch((res) => console.log(res));
