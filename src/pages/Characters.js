import React from "react";
import {useCharacters} from '../hooks/useCharacters';


export default function Characters() {
    const {error, loading, data} = useCharacters();

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>ERROR!</h2>;

    return(
        <div>
            {data.characters.results.map(char => {
            return <div>
                <h1>{char.name}</h1>
                <img src={char.image}/>
            </div>
        })}
        </div>
    )
}