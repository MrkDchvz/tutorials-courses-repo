// REST OPERATOR
// - It's a rest operator when its used as a function parameter
// - Works the same as the arguments keyword
// - Allows to have function with dynamic parameters.
// - Its not a spread operator.
// - Returns an array.
function addNum(...nums) {
  console.log(nums[0]);
}

addNum(69, 5, 7, 8, 12);
