function simpleStringState(initial : string) : [() => string, (v : string) => void] {
    let str : string = initial;
    return [
        () => str,
        (v : string) => {
            str = v;
        } 
    ]
}
// This is possible because of JS closures. getter and setter return function can still access the str variable from the function simpleStringState;
let [getter,setter] = simpleStringState("Hello");
console.log(getter());
setter("Honey");
console.log(getter());

