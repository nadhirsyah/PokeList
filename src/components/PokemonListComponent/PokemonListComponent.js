import React from 'react'
import './PokemonList.css';
import { useHistory } from "react-router-dom";
import { Badge } from '../Badge/Badge';
export function PokemonListComponent({ pokemons }) {
    const history = useHistory();
    console.log(pokemons)
    return (
        <div className="pokemon-list">
                <div className="container-card">
                    {pokemons && pokemons.map((pokemon) => (
                        <div className="card-pokemon" key={pokemon.id} onClick={() => {
                            if (pokemon.nickname){
                                let path = `my-pokemon/${pokemon.nickname}/${pokemon.id}`; 
                                history.push(path);
                            } else {
                                let path = `pokemon/${pokemon.name}/${pokemon.id}`; 
                                history.push(path);
                            }
                        }}>
                            <div className="container-card-img-pokemon">
                                <img className="card-img-pokemon"src={pokemon.image} alt={pokemon.name}/>
                            </div>
                            <div className="card-content">
                                <p className="card-title">{pokemon.name}</p>
                                <div className="card-info">
                                    {pokemon.types && pokemon.types.map((type)=>{
                                        return (<Badge color={type}>{type}</Badge>)
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}              
                </div>
            </div>
    )
}
