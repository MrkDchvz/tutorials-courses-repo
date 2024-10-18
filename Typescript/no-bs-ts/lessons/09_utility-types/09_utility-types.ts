// Partial<Type> => Constructs a type where all its properties are set to optional (?).
interface MyUser {
    name: string,
    id : string,
    email? : string;
}

function newMerge(user : MyUser, updateUser : Partial<MyUser> ) : MyUser {
    return {
        ...user,
        ...updateUser
    }
}


console.log(newMerge({name: "Ajitani Hifumi", id: "BSSG06", email: "faust@peroro.com"}, {name: "Koharu", id: "MUSCPVRT", email: "KoharuJTF@peroro.com"}));


// Required<Type> set all properties to required. Opposite of Partial<Type>
interface Person {
    name: string,
    age: number,
    work: string
}

const createWorkingAdult = (description : Required<Person> ) : Person => {
    return {
        ...description
    }
}

console.log(createWorkingAdult({name: "Rin", age: 21, work: "Secretary"}));

//  Pick<Type, Keys>
const createStudent = (description: Pick<Person, "name" | "age">) : Pick<Person, "name" | "age"> => {
    return {
        ...description
    }
}
console.log(createStudent({name: "Akira", age: 15}));

//  Omit<Type, Keys> => Oppposite of Pick

const OnlyName = (description :  Omit<Person, "work">) : Omit<Person, "work"> => {
    return {
        ...description
    }
}

console.log(OnlyName({name: "Kurisu", age: 17}));

// Record<Key, Type> 
type users = "administrator" | "editor" | "viewer";
type permissions = "read" | "write" | "delete";

const userPermissions : Record<users, permissions[]> = 
    {
        "administrator" : ["read", "write", "delete"],
        "editor" : ["read", "write"] ,
        "viewer" : ["read"]
    }
 
function checkPermission(userType: users, permission :permissions) : boolean {
    return userPermissions[userType].includes(permission);
}

console.log(checkPermission("viewer", "delete"));

