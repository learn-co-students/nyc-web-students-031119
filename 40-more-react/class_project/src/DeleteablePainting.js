import React from 'react'
import PaintingCard from './PaintingCard'
import DeleteConfirmation from './DeleteConfirmation'

class DeleteablePainting extends React.Component {
  state = {confirmationView: false}

  toggleDeleteClick = () => {
    this.setState(prevState => ({confirmationView: !prevState.confirmationView}))
  }

  render() {
    if(this.state.confirmationView) {
      return <DeleteConfirmation
        painting={this.props.painting}
        toggleDeleteClick={this.toggleDeleteClick}
        handleDeleteClick={this.props.onDeleteClick}
       />
    } else {
      return <PaintingCard
         painting={this.props.painting}
         handleVoteClick={this.props.onVoteClick}
         toggleDeleteClick={this.toggleDeleteClick}
        />
    }
  }

}

export default DeleteablePainting
