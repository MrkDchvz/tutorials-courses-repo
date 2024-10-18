// import fetch from "node-fetch";
interface PokemonResults  {
    count: number;
    next?: string;
    previous?: string;
    results: {
        name: string;
        url: string;
    }[];
}
type FetchPokemonResult<T> = T extends undefined ? Promise<PokemonResults> : void;

// Fetch Poekmon function
// Callbackfu
function fetchPokemon<T extends undefined | ((data: PokemonResults) => void)>(url: string, cb?: T) : FetchPokemonResult<T> {
    if (cb) {
        fetch(url)
            .then((res) => res.json())
            .then((data) => cb(data as PokemonResults));
            return undefined as FetchPokemonResult<T>;
    }
    else {
        return fetch(url).then((data) => data.json()) as FetchPokemonResult<T>;
    }

}  

fetchPokemon("https://pokeapi.co/api/v2/pokemon?offset=10&limit=10", (data) => {
    data.results.forEach((data) => console.log(data.name));
})