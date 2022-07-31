import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
    query{
        characters{
            results{
                image
                name
                id
            }
        }
    }
`
export const useCharacters = () => {
    const {error, loading, data} = useQuery(GET_CHARACTERS);
    return {error, loading, data}
}