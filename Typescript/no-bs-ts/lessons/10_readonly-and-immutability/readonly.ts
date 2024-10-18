// Readonly on interface
interface student {
    readonly id : number,
    name : string,
    age : number
}

let student1 : student = {
    id : 1,
    name : "Mark",
    age : 20
}
// Readonly on Types
type ReadOnlyStudent = Readonly<student>;

// Readonly on function return 
function makeStudent(id : number, name : string, age : number) : Readonly<student> {
    return {
        id : id,
        name : name,
        age : age
    }
}
// true immutable arrays
const trueConstArray : Readonly<number[]> = [1,2,3,4,5,6,6,8,8];


