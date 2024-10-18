// Errors that I encountered
//-------------------------------------------------------
// Error: 1 
// implicit function body (arrow function w/out brackets after the arrow has implied "return")
// The code below is the opposite of it its called explicit function body where there is brackets after the arrow a "return" keyword is needed.
// See the solution above
export const formatError = (title :string, param : string | number) : string => {`${title} ${param}`};


// Sources:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


//-------------------------------------------------------
//Error 2: "SyntaxError: Cannot use import statement outside a module" 
// node cannot run typescript by default use "npx ts-node" to run typescriptfile
// ts-node is a REPL (Read-Eval-Print-Loop) and an execution engine for typescript in node


