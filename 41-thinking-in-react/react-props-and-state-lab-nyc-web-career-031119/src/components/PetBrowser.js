import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    console.log(this.props.pets[0])
    return <div className="ui cards">
      {
        this.props.pets.map((pet) => <Pet handleAdoptionClick={this.props.handleAdoptionClick} pet={pet} key={pet.id}/>)
      }
    </div>
  }
}

export default PetBrowser
