import React from 'react'

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
            <div onClick={props.toggleDeleteClick} className="ui basic positive button">
              Cancel
            </div>
            <div onClick={() => props.handleDeleteClick(props.painting.id)} className="ui button basic red" >
              Delete It For SUre!
            </div>
          </div>
        </div>
      </div>
    );
  }

export default DeleteConfirmation
