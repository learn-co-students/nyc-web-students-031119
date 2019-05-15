import React from 'react'
import PaintingCard from './PaintingCard'


class PaintingList extends React.Component {

  render() {
    const paintingCards = this.props.paintings.map(painting => {
      return <PaintingCard painting={painting} onClick={this.props.handleVoteClick} key={painting.id} />
    })

    return (
      <div className="ui items">
        { paintingCards }
      </div>
    )
  }

}

export default PaintingList
