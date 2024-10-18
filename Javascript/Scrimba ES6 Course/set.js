// Intialize set
const newSet = new Set([1, 2, 23, 4, 5, 6, 1]);

// Return the size of the set
console.log(newSet.size);

// Add an Items on the set;
newSet.add(69);
console.log(newSet);

// Delete an item on a set
newSet.delete(69); // Returns a boolean value to check if the number is deleted sucessfully.
console.log(newSet);

// Clear a set
newSet.clear();
console.log(newSet);
