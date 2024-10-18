
// Typescript basic types 
let userName : string = "Mark";
let hasLoggedIn : boolean = true;
let count : number = 1;
let exp : RegExp = /foo/;
const names : string[] = userName.split(" ");
const numbers : Array<number> =[1,2,4];
const myPerson : {
    first  : string,
    last : string
} = {
    first : "mark",
    last : "dechavez"
}

// Dynamic Object
const myAnimals : Record<string, number> = {
    "dogs" : 1,
    "cats" : 20,
    "bat" : 0
};
myAnimals["panda"] = 12;
console.log(myAnimals);

// Type Errors


// hasLoggedIn = "Herrington";
// const nums : Array<number> = [1,2, "Spring"];
// const myPersonError : {
//     first  : string,
//     last : string
// } = {
//     first : "mark",
//     last : "dechavez",
//     isCool : false
// }

// Conditionals
if (myAnimals["panda"] === 12) {

}

// Loops
for (let i = 0; i < 10; i++) {
    console.log(i);
}

[1,2,3].forEach(v => v * 10);











console.log(hasLoggedIn);
