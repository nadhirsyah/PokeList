import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../../graphql/GetPokemon'
import { PokemonListComponent } from '../../components/PokemonListComponent/PokemonListComponent';
export function PokemonList() {
    
    const {data:{ pokemons = []} = {}} = useQuery(GET_POKEMONS, {
        variables: {
            first: 151
        }
    })

    if (pokemons){
        return(
            <PokemonListComponent pokemons={pokemons}/>

        )
    } else {
        return(
            <p>Loading ....</p>
        )
    }
}