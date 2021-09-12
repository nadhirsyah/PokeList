import React, { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext';
import { PokemonListComponent } from '../../components/PokemonListComponent/PokemonListComponent';
export function MyPokemon() {
    const {myPokemons, setMyPokemons} = useContext(PokemonContext)
    if (myPokemons){
        return(
            <PokemonListComponent pokemons={myPokemons}/>

        )
    } else {
        return(
            <p>Loading ....</p>
        )
    }
}
