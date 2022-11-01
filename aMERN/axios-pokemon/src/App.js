import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [pokemon807, setPokemon807] = useState([]);

    const setPokemon = () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(res => {
                setPokemon807(res.data.results);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="flex flex-col m-auto items-center gap-4 p-4">
            <button
                className="border-2 border-black rounded bg-slate-200 px-2 w-2/5"
                onClick={setPokemon}
            >
                Fetch "All" 807 Pokemon
            </button>
            <ul className="list-disc">
                {pokemon807.map((p, i) => {
                    return <li key={i}>{p.name}</li>;
                })}
            </ul>
        </div>
    );
}

export default App;
