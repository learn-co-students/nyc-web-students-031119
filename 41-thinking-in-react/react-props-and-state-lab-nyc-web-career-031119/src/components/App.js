import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import { getAll } from '../data/pets'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: getAll(),
      filters: {
        type: 'all'
      }
    }
  }

  handleFilterChange = (e) => {
    console.log(e.target.value);
    this.setState({filters: {type: e.target.value} })
  }

  handleAdoptionClick = (id) => {
    console.log('clicked', id);
    this.setState(prevState => {
      return {
        pets: prevState.pets.map(p => {
          if (p.id === id) {
            return {...p, isAdopted: true}
          } else {
            return p
          }
        })
      }
    })
  }

  render() {
    console.log(this.state.filters.type);
    // array of all the pets
    // what the current filter value is
    const filteredPets = this.state.pets.filter(pet => {
      if (this.state.filters.type === "all") {
        return pet
      } else {
        return pet.type === this.state.filters.type
      }
    })


    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters handleFilterChange={this.handleFilterChange} value={this.state.filters.type}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser handleAdoptionClick={this.handleAdoptionClick} pets={filteredPets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
