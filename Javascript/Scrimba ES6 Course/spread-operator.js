// Spread Operator on array.
let contacts = ["Mary", "Joel", "Danny"];

// Makes a copy of contacts array and adds "David" on the front, put all items on the contacts array in the middle and add "Lily" on the last
let personalFriends = ["David", ...contacts, "Lily"];

// Note Arrays are reference variables so when doing this:
// contacts = ["Mary", "Joel", "Danny"];
// personalFriends = contacts
// contacts.push("IshowMeat");
// that "iShowMeat" will be also added to the personalFriends array.

//  Spread Operator on object
let person = {
  name: "Adam",
  age: 25,
  city: "Manchester",
};

//Makes a copy of the object,  add all properties of person {name, age, city}, and add the properties salary and position and their corresponding values.
let employee = {
  ...person,
  salary: 50000,
  position: "Software Developer",
};

console.log(employee);

// Note objects are reference variables so when doing this:
// employee = person
// person.newProperty = "value"
// that newProperty will be also added to the employee object.
