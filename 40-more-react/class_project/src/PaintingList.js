import React from 'react'
import DeleteablePainting from './DeleteablePainting'


class PaintingList extends React.Component {

  render() {
    const paintingCards = this.props.paintings.map(painting => {
      return <DeleteablePainting painting={painting} onClick={this.props.handleVoteClick} key={painting.id}/>
      // return <PaintingCard painting={painting} onClick={this.props.handleVoteClick} key={painting.id} />
    })

    return (
      <div className="ui items">
        { paintingCards }
      </div>
    )
  }

}

export default PaintingList
