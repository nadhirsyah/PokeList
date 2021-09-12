import React from 'react';
import './App.css'
import {Badge, handleColorType} from '../../components/Badge/Badge';
import {Button} from '../../components/Button/Button'
export function PokemonDetailComponent({pokemon, clickCapture}){
    const handleAverage = (min, max)=> {
        return (min + max) / 2
    }
    console.log(pokemon)
    return(
        <div>
            <h1 className="text-center ">{pokemon.name} #{pokemon.number}</h1>
            {pokemon.nickname && (<h1 className="text-center ">{pokemon.nickname}</h1>)}
                    <div className="column-2">
                        <img src={pokemon.image} alt={pokemon.name} className="img-fit" /><br></br>
                        {pokemon.nickname ? null : (<div>
                            <Button onClick={clickCapture}>Capture</Button>
                        </div>)}
                        
                    </div>
                    <div className="column-2">
                        <h3>{pokemon.name} is a {pokemon.types && pokemon.types.map((type,index) =>{
                        if (index == pokemon.types.length - 1){
                            return (<span style={{ color: handleColorType(type) }}>{type}</span>)
                        } else {
                            return (<span style={{ color: handleColorType(type) }}>{type}<span style={{ color: 'black' }}>/</span></span>)
                        }
                        })} type pokemon. It is known as the '{pokemon.classification}'.</h3>
                        <div className="pad-b">
                            <h3>Type</h3>
                            {pokemon.types && pokemon.types.map((type)=>{
                                return (<Badge color={type}>{type}</Badge>)
                            })}
                        </div>
                        <div className="pad-b">
                            <h2>Weaknesses</h2>
                            {pokemon.weaknesses && pokemon.weaknesses.map((ele)=>{
                                    return (<Badge color={ele}>{ele}</Badge>)
                            })}
                        </div>
                        <div className="pad-b">
                            <h2>Resistant</h2>
                            {pokemon.resistant && pokemon.resistant.map((ele)=>{
                                    return (<Badge color={ele}>{ele}</Badge>)
                                })}
                        </div>
                        <div className="row-pokemon rounded-rectangle">
                            <div className="column-pokemon">
                                <p className="text-pokemon">Average Weight</p>
                                {pokemon.weight ? handleAverage(parseInt(pokemon.weight.minimum), parseInt(pokemon.weight.maximum)) :null}kg
                            </div>
                            <div className="column-pokemon">
                                <p className="text-pokemon">Average Height</p>
                                {pokemon.height ? handleAverage(parseFloat(pokemon.height.minimum), parseFloat(pokemon.height.maximum)) :null}m
                            </div>
                        </div>
                        <div>
                            
                        </div>
                        
                    </div>
                    {/* <div>
                        <p>Next Evolutions</p>
                        <div className="row-pokemon-evolutions">
                        {pokemon.evolutions && pokemon.evolutions.map((poke) => (
                            <div className="column-pokemon-evolutions">
                               {pokemon.id !== poke.id && (
                                   <>
                                    <img src={poke.image} style={{ borderRadius: "50%", width: "200px"}}/>
                                    <p>{poke.name}</p>
                                    </>
                                )  
                            }
                            </div>
                        ))}
                        </div>
                    </div> */}
                    {/* 
        
                <div className="pokemon-move card">
                <h2 className="text-title">Attack Move Learned By {pokemon.name}</h2>
                <Table responsive="md">
                    <thead>
                        <tr>
                            <th>Attack</th>
                            <th>Type</th>
                        </tr>
                        </thead>
                        <tbody>
                        {pokemon.attacks && pokemon.attacks.fast.map((element,index)=>{
                            return(<tr key={index}>
                                <td>{element.name}</td>
                                <td>{element.type}</td>
                            </tr>
                            )
                        })}
                        {pokemon.attacks && pokemon.attacks.special.map((element)=>{
                            return(<tr>
                                <td>{element.name}</td>
                                <td>{element.type}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </Table>
                </div> */}
        </div>
    )
}