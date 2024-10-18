"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName =
  exports.introduce =
  exports.fetchData =
  exports.printFormat =
  exports.format =
  exports.addStrings =
    void 0;
// function
function addNumbers(a, b) {
  return a + b;
}
exports.default = addNumbers;

// Variable function w/ default parameters
var addStrings = function (str1, str2) {
  if (str2 === void 0) {
    str2 = "";
  }
  return "".concat(str1, " ").concat(str2);
};
exports.addStrings = addStrings;

// Union Types - The parameter param accepts types that either string or number
var format = function (title, param) {
  return "".concat(title, " ").concat(param);
};
exports.format = format;

// Void Functions
var printFormat = function (title, param) {
  console.log("".concat(title, " ").concat(param));
};
exports.printFormat = printFormat;

// Functions with promise returns
var fetchData = function (url) {
  return Promise.resolve("Data from ".concat(url));
};
exports.fetchData = fetchData;

// Functions with REST Parameter
var introduce = function (Salutation) {
  var names = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    names[_i - 1] = arguments[_i];
  }
  return Salutation + names.join(" ");
};
exports.introduce = introduce;
var getName = function (user) {
  return ""
    .concat(user === null || user === void 0 ? void 0 : user.first, " + ")
    .concat(user === null || user === void 0 ? void 0 : user.last);
};
exports.getName = getName;
