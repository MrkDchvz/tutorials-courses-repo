// function
function addNumbers(a : number, b : number) : number {
    return a + b;
}

export default addNumbers;

// Variable function w/ default parameters
export const addStrings = (str1 : string, str2 : string = "") : string => `${str1} ${str2}`;

// Union Types - The parameter param accepts types that either string or number
export const format = (title :string, param : string | number) : string => { return `${title} ${param}`};

// Void Functions
export const printFormat = (title : string, param : string | number) : void =>{
    console.log(`${title} ${param}`);
}

// Functions with promise returns
export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`);

// Functions with REST Parameter
export const introduce = (Salutation : string, ...names: string[]) => {
    return Salutation + names.join(" ");
}

// Using Optional Chaining to avoid undefined object when object is not provided. 
export const getName = (user : {first : string, last : string}) : string  =>  {
    return (`${user?.first} + ${user?.last}`);
} 

