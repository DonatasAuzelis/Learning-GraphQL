import React, {useState} from 'react';
import {gql, useLazyQuery} from '@apollo/client';

const GET_CHARACTER_LOCATIONS = gql`
    query getLocations($name: String!){
        characters(filter: {
            name: $name
        }) {
            results {
                location {
                    name
                }
            }
        }
    }
`

export default function Search() {

    const [name, setName] = useState("");
    const [getLocations, {error, loading, data}] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
        variables: {
            name
        }
    })
    return(
        <div>
            <input value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => getLocations()}>SEARCH</button>
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error...</h1>}
            {data && (
                <ul>
                    {data.characters.results.map(c => {
                        return <li>{c.location.name}</li>
                    })}
                </ul>
            )}
        </div>
    )

}