
// Error 1: '{' or ';' expected.ts(1144)
export function funcError(text : string) : void =>  {
    console.log(text)
}

// Solution 1: remove arrow function '=>' because its already a function
export function funcSolution(text : string) : void  {
    console.log(text)
}