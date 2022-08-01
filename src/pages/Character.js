import React from "react";
import { useParams } from "react-router";
import {useCharacter} from '../hooks/useCharacter';


export default function Characters() {

    const {id} = useParams ();
    const {error, loading, data} = useCharacter(id);

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>ERROR!</h2>;

    return(
        <div>
            <h1>{data.character.name}</h1>
            <img src={data.character.image} />
            <div>
                <h2>Episodes: </h2>
                {data.character.episode.map(e => {
                    return <p>{e.name} - <u>{e.episode}</u></p>
                })}
            </div>
        </div>
    )
}