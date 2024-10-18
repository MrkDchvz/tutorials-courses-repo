
function pluck<DataType, KeyType extends keyof DataType>(
    items: DataType[], 
    key : KeyType): DataType[KeyType][] {
    
        return items.map((item) => item[key]);
}

const dogs = [
    {name : "Yuan", age : 10},
    {name : "Yuri", age : 1},
    {name : "Yumi", age : 5},
    {name : "Yuki", age : 8}
]

console.log(pluck(dogs, "name"));


// Keyof with extend, makes sure that the value of the extending object (e.g KeyType) will be restricted with only the extended object's (e.g DataType) attributes
// In this case the value of the generic "KeyType" can only be whatever attribute the generic "DataType" has. 
// Example: the dog object (will be subtituted to the generic "Datatype") has an attribute of "name" and "age" so the "Keytype" generic can only be "name" | "age"
// the return value DataType[KeyType][] tells that the return value of the function pluck will be whatever the array of whatever datatype of the second parameter
// In the example above the second parameter is "name" which has a type of string so the return type for this situation is an array of strings. 
// If the second parameter is age then the return value will be an array of numbers. Since the datatype of age is a number.


interface BaseEvent {
    time: number,
    user: string
}

interface EventMap {
    // "&"" is a union type, in this case it will combine all the attributes from the BaseEvent interface and the attributes: quantity, productId;
    // The type of addToCart will be: {time : number, user : string, quantity: number, productId: string}
    addToCart: BaseEvent & {quantity : number; productId: String},
    checkOut: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(name : Name, data: EventMap[Name]) :void {
    console.log([name, data]);
}

sendEvent("addToCart", {productId: "foo", user: "baz", quantity: 1, time: 10});
sendEvent("checkOut", {time : 20, user: "Bean"});