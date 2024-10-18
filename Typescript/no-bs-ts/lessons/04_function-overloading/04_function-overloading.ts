//  Create a coordinate interface with two attributes (X, Y) that accepts a number
interface Coordinate {
    x : number,
    y : number
}
function parseCoordinate() : Coordinate;
function parseCoordinate(object : Coordinate) : Coordinate;
function parseCoordinate(x : number, y : number) : Coordinate;
function parseCoordinate(str : string) : Coordinate;
// Create an actual function implementation that is compatible on other overloading function signatures.
// Most of the cases the function implementation is a no args function. 
// This case is another way to implement a function where it is compatible with other overloading function
function parseCoordinate(args1? : unknown, args2? : unknown) : Coordinate {
//  1.Create a parseCoordinate function that initializes that coordinate to 0,0 
    let coords : Coordinate = {
        x : 0,
        y : 0
    }
    // Overload the function where the parameters are a string e.g "x:12,y:13"
    if (typeof args1 == "string") {
        (args1.split(",").forEach((str) => {
            // Deconstruct array
            const [key, value] = str.split(":");
            // coords can only be x or y then set the value of the attribute with the value variable from the deconstructed array
            coords[key as 'x' | 'y'] = parseInt(value, 10);
            })
        )
    }
// Overload the function where the parameters is the obj : Coordinate
    if (typeof args1 == "object") {
        coords = {
            ...args1 as Coordinate
        }
    }
//  Overload the function where there are 2 parameters x,y with type of number
    if (typeof args1 == "number" && typeof args2 == "number") {
        coords = {
            x : args1,
            y : args2
        }
    }
    return coords
}

console.log(parseCoordinate());
console.log(parseCoordinate(1,2));
console.log(parseCoordinate({x : 10, y : 20}));
console.log(parseCoordinate("x:12,y:13"));





