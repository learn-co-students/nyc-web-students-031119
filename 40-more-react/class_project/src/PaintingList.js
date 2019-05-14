import React from 'react'
import PaintingCard from './PaintingCard'
import paintings from './artworks'


class PaintingList extends React.Component {
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {paintings: paintings.sort((a, b) => b.votes - a.votes)}
  // }

  state = {paintings: paintings.sort((a, b) => b.votes - a.votes)}

  handleVoteClick = (id) => {
    console.log('the click happened', id)
    const updatedPaintings = this.state.paintings.map(pntg => {
      if(pntg.id === id) {
        return {...pntg, votes: pntg.votes + 1}
      } else {
        return pntg
      }
    })
    updatedPaintings.sort((a, b) => b.votes - a.votes)
    this.setState({paintings: updatedPaintings})
  }

  render() {
    const paintingCards = this.state.paintings.map(painting => {
      return <PaintingCard painting={painting} onClick={this.handleVoteClick} key={painting.id} />
    })

    return (
      <div className="ui items">
        { paintingCards }
      </div>
    )
  }

}

export default PaintingList
