import React, { useContext,  useState } from 'react';
import { useQuery } from "@apollo/client";
import { useParams  } from "react-router-dom";
import { GET_POKEMON_DETAILS } from '../../graphql/GetPokemon';
import { PokemonContext } from '../../context/PokemonContext';
import { useHistory } from "react-router-dom";
import { PokemonDetailComponent } from './PokemonDetailComponent';
import styled from '@emotion/styled'
import Modal from '../../components/Modal/Modal'

export function PokemonDetail() {
    const {myPokemons, setMyPokemons} = useContext(PokemonContext)
    const [showModal, setShowModal] = useState(false)
    const [nickname, setNickname] = useState("");
    const handleModal = () => {
        setShowModal(prev=> !prev)
    }
    let { name, id } = useParams();
    let history = useHistory();
    const {data:{ pokemon = []} = {}} = useQuery(GET_POKEMON_DETAILS, {
        variables: {
            "id": id,
            "name": name
          }
    });
    const clickCapture = () =>{
        var captureSuccess = Math.floor(Math.random() * 2)
        console.log(captureSuccess)
        if (captureSuccess == 1){
            // setShowModal={setShowModal}
            handleModal()
        } else {
            alert(pokemon.name + " fled! You can try to capture again")
        }
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        var tempPokemon = JSON.parse(JSON.stringify(pokemon))
        tempPokemon.nickname = nickname
        var listPokemon = myPokemons
        listPokemon.push(tempPokemon)
        setMyPokemons(listPokemon)
        console.log(myPokemons)
        handleModal()
        history.push('/')
    }
  
    return (
        <div>
            <PokemonDetailComponent  pokemon={pokemon}  clickCapture={clickCapture} />
            <Modal showModal={showModal} nickname={nickname} setNickname={setNickname} setShowModal={setShowModal} handleSubmit={handleSubmit}/>
        </div>
    )
}
