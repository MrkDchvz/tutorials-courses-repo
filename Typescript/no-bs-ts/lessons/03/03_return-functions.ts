// Note: The function signature looks like this export function <function name><(function parameter)>: <return function>
export function MutationFunction(num : number) : (val : number) => number {
    return (val : number) => val + num;
}
// Javascript Closures - the anonymous function that has been returned (inner function) from the variable addOne remembers the value of the parameter of Mutation Function (Outer function).
const addOne = MutationFunction(1)
console.log(addOne(55));


// Cleaner Version of function return a function
export type adderFunction = (v : number) => number;

export function MutationFunction2(num : number) : adderFunction {
    return (v : number) => v + num;
}