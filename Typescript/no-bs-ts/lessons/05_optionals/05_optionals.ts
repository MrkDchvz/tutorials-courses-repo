// Create a function with optional parameters
function printIngredient(quantity : number, ingredients : string, extra? : string) {
    console.log(`${quantity}, ${ingredients} ${extra ?? ""}`);
} 

// printIngredient(10, "Meat");

// Create an interface with optional fields
interface User {
    info? :  {
        email? : string
        },
    name : string,
    age : number
}

// Create a function that accesses the interface but make it safe
function getEmail(user : User) : string {
    return user.info?.email ?? "Email Not Found";
}
const sampleUser : User = {
    info : {
        email : "Denjichainsawman@gmail.com"
    },
    name : "Denji",
    age : 20
}
// console.log(getEmail(sampleUser))
// Create a function with optional callback function.
function optionalCallback(callback? : () => void) : void {
    callback?.();
}

optionalCallback();
