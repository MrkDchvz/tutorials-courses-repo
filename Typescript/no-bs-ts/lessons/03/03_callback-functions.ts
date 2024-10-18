// ==========================================
//function callback with Import
// ==========================================

// Step 1: Create an Interface for type casting 
interface callbackFunc {
    (text : string) : void;
}

// Step 2: Create Callback function. callback must have the same signature as the created interface.
export function func(text : string) : void {
    console.log(text);
}
// Step 3: Create Main function use the created interface as the type for the callback param
export default function printToFile(text : string, callback : callbackFunc) : void {
    callback(text);
}
// Step 4: Use the callback function as the parameter. 
printToFile("I AM A CALLBACK", func);

// ==========================================
//Shorthand Callbacks
// ==========================================
// Sample Shorthand callback structure
export function printToFile2(text : string, callback : (text : string) => void) : void {
    // Code here
}

// Callback function mutating array example
export function arrayMutation(numbers : number[], mutate: (num : number) => number) : number[] {
    numbers.forEach((element, index) => {
        // use callback function
        element = mutate(element);
        numbers[index] = element;
    });
    return numbers
}

// callback function for arrayMutation
export function plusTwo(num : number) : number {
    return num + 2;
}

// ==========================================
//Callback Function Using Type Keyword
// ==========================================

// Declare Object structure
export type MutationFunction = (v : number) => number;
// Set Callback Function
const myNewMutationFunction : MutationFunction = (v : number) => v + 1;
// Insert Callback function as parameter
export function printToFile3(text : string, callback : MutationFunction) : void {
    // Code here
}
