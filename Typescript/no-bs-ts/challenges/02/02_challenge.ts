// For each using reduce
function myForEach<Item>(list : Item[], callbackfn : (val: Item) => void) : void {
    list.reduce((a,c) => {
        callbackfn(c);
        return undefined;
    }, undefined)
}


// Filter function using reduce
function myFilter<Item>(list : Item[], callbackfn : (val : Item) => boolean) : Item[] {
    const listFiltered : Item[] = [];
    list.reduce((a,c,i) => {
        if (callbackfn(c)) {
            listFiltered.push(list[i]);
        }
        return undefined;
    },undefined)
    return listFiltered;
}
// console.log(myFilter(['spray', 'elite', 'exuberant', 'destruction', 'present'], (val) => val.length > 6));


// Better Filter Function using redude

function myBetterFilter<T>(list : T[], callbackfn : (val : T) => boolean) : T[] {
    return list.reduce((a,c) => callbackfn(c) ? [...a,c] : a ,[] as T[]);
}

console.log(myBetterFilter(['spray', 'elite', 'exuberant', 'destruction', 'present'], (val) => val.length > 6));


// Map function using reduce 
// Note: this one is wrong because it cannot return an array with different data type besides the <Item> data type. To fix this create another generic for the return value  
function myMap<Item>(list : Item[], callbackfn : (val : Item) => Item) : Item[] {
    const listMapped : Item[] = list;
    list.reduce((a,c,i) => {
        listMapped[i] = callbackfn(c);
        return undefined
    }, undefined)

    return listMapped;
}

// Map function using reduce (Better)
function myBetterMap<T,K>(list : T[], callbackfn : (val : T) => K) : K[] {
    return list.reduce((a,c) => [...a, callbackfn(c)] ,[] as K[]);
}

// console.log(myBetterMap([1,2,3,4,5,6], (val) => (val * 10).toString()));



