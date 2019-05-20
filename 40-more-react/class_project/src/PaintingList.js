import React from 'react'
import DeleteablePainting from './DeleteablePainting'


class PaintingList extends React.Component {

  myFunc() {
    console.log('hello');
  }

  render() {
    const paintingCards = this.props.paintings.map(painting => {
      return (
        <DeleteablePainting
          painting={painting}
          onVoteClick={this.props.handleVoteClick}
          onDeleteClick={this.props.handleDeleteClick}
          key={painting.id}
        />
      )
      // return <PaintingCard painting={painting} onClick={this.props.handleVoteClick} key={painting.id} />
    })

    return (
      <div className="ui items" style={{backgroundColor: this.props.color}}>
        { paintingCards }
      </div>
    )
  }

}

export default PaintingList
