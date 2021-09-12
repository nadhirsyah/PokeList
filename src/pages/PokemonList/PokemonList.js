import React, {useContext} from 'react';
import styled from '@emotion/styled'
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../../graphql/GetPokemon'
import { PokemonListComponent } from '../../components/PokemonListComponent/PokemonListComponent';
import { PokemonContext } from '../../context/PokemonContext';
export const Title = styled.h2`
    text-align: center;
`;
export function PokemonList() {
    const {myPokemons, setMyPokemons} = useContext(PokemonContext)
    const {data:{ pokemons = []} = {}} = useQuery(GET_POKEMONS, {
        variables: {
            first: 151
        }
    })

    if (pokemons){
        return(
            <>
            <Title>Total Owned Pokemon: {myPokemons.length}</Title>
            <PokemonListComponent pokemons={pokemons}/>
            </>

        )
    } else {
        return(
            <p>Loading ....</p>
        )
    }
}