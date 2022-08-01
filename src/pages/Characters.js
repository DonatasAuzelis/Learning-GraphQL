import React from "react";
import { Link } from "react-router-dom";
import {useCharacters} from '../hooks/useCharacters';


export default function Characters() {
    const {error, loading, data} = useCharacters();

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>ERROR!</h2>;

    return(
        <div>
            {data.characters.results.map(char => {
            return <Link to={`/${char.id}`} key={char.id}>
                <h1>{char.name}</h1>
                <img src={char.image}/>
            </Link>
        })}
        </div>
    )
}