import houses from "./houses.json";

interface House {
    name : string,
    planets : string[] | string
}

interface HouseWithID extends House {
    id : number
}

function findHouses(args1 : string | House[], args2? : (house : House) => boolean) : HouseWithID[] {
    let res : House[] =  [{
        name : "none",
        planets : "none",
    }]

    if (typeof args1 == "string") {
        res = JSON.parse(args1);
        res = typeof args2 == "undefined" ? res : res.filter(args2);
    }
    
    if (typeof args1 == "object") {
        res = typeof args2 == "undefined" ? args1 : args1.filter(args2);
    }

    // Map returns a new array
    // In this case and Id is added on the object so it became HouseWithId Object
    return res.map((house, index) => {
        return {
            ...house,
            id : index
        }
    }) 
    
} 



console.log(findHouses(houses, ({ planets }) => { return typeof planets == "string"  ? planets == "Calladan" : planets.includes("Calladan") } ));

