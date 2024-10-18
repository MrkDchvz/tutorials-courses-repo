async function PlaceOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Placing Order....");
      resolve("Order Placed!");
    }, 1000);
  });
}

async function PrepareFood() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Preparing Food....");
      resolve("Food Prepated!");
    }, 2000);
  });
}

async function DeliverFood() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Delivering Food....");
      resolve("Food Delivered!");
    }, 3000);
  });
}

async function CompleteOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Completing Order....");
      resolve("Order Complete!");
    }, 4000);
  });
}

async function MakeOrder() {
  let placeOrder = await PlaceOrder();
  console.log(placeOrder);
  let prepareFood = await PrepareFood();
  console.log(prepareFood);
  let deliverFood = await DeliverFood();
  console.log(deliverFood);
  let completeOrder = await CompleteOrder();
  console.log(completeOrder);
}

MakeOrder();
