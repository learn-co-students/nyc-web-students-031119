import React from 'react'
import { Card } from 'semantic-ui-react'

// state here for the toggle

class PokemonCard extends React.Component {
  state = {
    displayFront: true
  }

  handleClick = () => {
    // console.log('CLICKED ')
    this.setState({displayFront: !this.state.displayFront})
  }

  render() {
    // console.log('POKEMON CARD PROPS: ', this.props)

    // name, hp, fronturl, and backurl
    const { name, sprites: {front, back} } = this.props.pokemon
    const hp = this.props.pokemon.stats.find(stat => stat.name === 'hp').value

    // console.log(name, front, back, hp)
    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleClick} >
            <img alt="oh no!" src={ this.state.displayFront ? front : back } />
          </div>
          <div className="content">
            <div className="header">{ name }</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              { hp }
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
