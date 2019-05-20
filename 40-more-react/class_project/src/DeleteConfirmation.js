import React from 'react'
import Button from './Button'

// class PaintingCard extends React.Component {
//   state = {confirmation: false}
  // console.log('PaintingCard props', props.painting);

  // state = {
  //   votes: props.painting.votes,
  //   name: "hi"
  // }
  //
  // handleVote = () => {
  //   // console.log('clicked!');
  //   this.setState((prevState) => ({votes: prevState.votes + 1}))
  //   this.setState((prevState) => ({votes: prevState.votes + 1}))
  //   this.setState((prevState) => ({votes: prevState.votes + 1}))
  //   this.setState((prevState) => ({votes: prevState.votes + 1}))
  //   this.setState({votes: this.state.votes + 1})
  //   this.setState({votes: this.state.votes + 1})
  //   this.setState({votes: this.state.votes + 1})
  //   console.log('this happens first');
  // }



const DeleteConfirmation = (props) => {
    console.log(props);
    const painting = props.painting
    // console.log('the new votes are', this.state.votes);
    // console.log(this.state.votes);
    // console.log(props);
    return (
      <div className="ui card">
        <div className="image">
          <img src={props.painting.image} alt={props.painting.slug}/>
        </div>
        <div className="content">
          <div className="header">
            Are you sure you want to delete {props.painting.title}?????
          </div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <Button onClick={props.toggleDeleteClick}>
              Cancel
            </Button>
            <Button onClick={() => props.handleDeleteClick(props.painting.id)}>
              Delete It For SUre!
            </Button>
          </div>
        </div>
      </div>
    );
  }

export default DeleteConfirmation
