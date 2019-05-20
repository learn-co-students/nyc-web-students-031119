import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    term: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(r => r.json())
      .then(data => {
        // console.log(data)
        // const pokemonsWKeys = data.map(pokemon => {
        //   return {
        //     ...pokemon,
        //     displayFront: true
        //   }
        // })
        this.setState({ pokemons: data}, () => {
          // console.log('CDM POKEMON INDEX STATE :', this.state.pokemons)
        })
      })
  }

  handleSearchChange = (e) => {
    // console.log(e.target.value)
    this.setState({term: e.target.value})
  }

  filterPokemons = () => {
    return this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.term.toLowerCase()))
  }

  createPokemon = (pokemon) => {
    debugger
    this.setState({
      pokemons: [...this.state.pokemons, pokemon]
    }, () => console.log(this.state.pokemons[-1]))
  }

  render() {
    // console log our state
    // console.log()
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearchChange} value={this.state.term} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.filterPokemons()} />
        <br />
        <PokemonForm createPokemon={this.createPokemon} />
      </div>
    )
  }
}

export default PokemonPage
