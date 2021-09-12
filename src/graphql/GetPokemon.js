import gql from "graphql-tag";

export const GET_POKEMONS = gql`
query pokemons($first: Int!){
  pokemons(first: $first){
    id
    number
    name
    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP
    maxHP
    image
  }
}
`

export const GET_POKEMON_DETAILS = gql`
query pokemon($id: String, $name: String){
  pokemon(id: $id, name: $name){
    id
    number
    name
    weight{
      minimum
      maximum
    }
    height{
      minimum
      maximum
    }
    attacks{
      fast{
        name
        type
        damage
      }
      special{
        name
        type
        damage
      }
    }
    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP
    maxHP
    image
    evolutions{
      id
      number
      name
      types
      image
    }
  }
}`