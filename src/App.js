import React, { Component } from "react"
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
  } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { useState } from "react";
import { PokemonContext } from "./context/PokemonContext";
import { PokemonList } from './pages/PokemonList/PokemonList';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import { PokemonDetail } from './pages/PokemonDetail/PokemonDetail'
import { MyPokemon }  from './pages/MyPokemon/MyPokemon';
import { MyPokemonDetail }  from './pages/MyPokemonDetail/MyPokemonDetail';
const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) => {
        alert(`Graphql error ${message}`);
      });
    }
  });
  
const link = from([
    errorLink,
    new HttpLink({ uri: "https://graphql-pokemon2.vercel.app" }),
]);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
});

export default function App(){
    const [myPokemons, setMyPokemons] = useState([]);
    return(
      <Router>
      <ApolloProvider client={client}>
        <PokemonContext.Provider value={{ myPokemons, setMyPokemons}}>
          <Navbar />
          <Route exact  path='/' component={PokemonList} />
          <Route exact  path='/my-pokemon' component={MyPokemon} />
          <Route exact  path='/pokemon/:name/:id' component={PokemonDetail} />
          <Route exact  path='/my-pokemon/:nickname/:id' component={MyPokemonDetail} />
        </PokemonContext.Provider>
      </ApolloProvider>
    </Router>
    )
}
