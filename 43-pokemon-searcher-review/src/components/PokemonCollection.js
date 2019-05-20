import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

// maybe i can make a functional component
const PokemonCollection = props => {
  // render() {
    // console.log('POKEMON COLLECTION PROPS: ', this.props)
    // const mappedCards = this.props.pokemons.map(pokemon => {
    //   return <PokemonCard key={pokemon.id} pokemon={pokemon} />
    // })

    return (
      <Card.Group itemsPerRow={6}>
        {
          props.pokemons.map(pokemon => {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />
          })
        }
        {/* <PokemonList pokemons={pokemons} /> */}
      </Card.Group>
    )
  // }
}

export default PokemonCollection
