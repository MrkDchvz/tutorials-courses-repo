// Make a generic function 
function simpleState<T>(initial : T) : [() => T, (v: T) => void] {
    let val : T = initial;
    return [
        () => val,
        (v : T) => val = v
    ]
} 
const [numGetter, numSetter] = simpleState(20);
const [strGetter, strSetter] = simpleState<string | null >(null);
console.log(numGetter());
console.log(strGetter());
numSetter(69);
strSetter("Sixty-Nine");
console.log(numGetter());
console.log(strGetter());

interface Rank<RankItem> {
    item: RankItem ,
    rank : number
}

// Ranker Algorithm Function
function ranker<RankItem>(items : RankItem[], rank : (v : RankItem) => number) {
    // Add Ranks for each Item
    const ranks: Rank<RankItem>[] = items.map((item) => ({
        item,
        rank : rank(item)  
    }))
    // Sort each Item by Ranks
    ranks.sort((a,b) => a.rank - b.rank);
    // Remove ranks and return the sorted items 
    return ranks.map((rank) => rank.item)
}

