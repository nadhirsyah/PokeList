import React, { useContext,  useState } from 'react';
import { useQuery } from "@apollo/client";
import { useParams  } from "react-router-dom";
import { GET_POKEMON_DETAILS } from '../../graphql/GetPokemon';
import { PokemonContext } from '../../context/PokemonContext';
import { useHistory } from "react-router-dom";
import { PokemonDetailComponent } from '../PokemonDetail/PokemonDetailComponent';
import styled from '@emotion/styled'
import Modal from '../../components/Modal/Modal'

export function MyPokemonDetail() {
    const {myPokemons, setMyPokemons} = useContext(PokemonContext)
    let { nickname, id } = useParams();
    console.log(nickname + " " + id)
    if (myPokemons){
        return(
            <div className="">
                {myPokemons && myPokemons.map((poke, index) => {
                    if(poke.nickname == nickname && poke.id == id){
                        console.log(poke)
                        return (<PokemonDetailComponent key={index} pokemon={poke} />)
                    }
                })}
                                
               
            </div>
        )
    } else {
        return(<h1>Tidak ada pokemon yang dimiliki</h1>)
    }
}
