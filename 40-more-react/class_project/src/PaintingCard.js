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


  class Button extends React.Component {
    render() {
      console.log("Button Props", this.props);
      return (
        <div className={`ui basic ${this.props.color} button`}>
          {this.props.children}
        </div>
      )
    }
  }

  // <div className="ui basic blue button">
  //   <i className="add circle icon" />
  //   More Info
  // </div>

  // <div className="ui button basic red" onClick={props.toggleDeleteClick}>
  //   <i className="trash icon" />
  //   Delete It
  // </div>


const PaintingCard = (props) => {
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
          <div className="header">{props.painting.title}</div>
          <div className="meta">by {props.painting.artist.name}</div>
        </div>
        <div className="content">
          <a href="/" onClick={(e) => {
            e.preventDefault()
            props.handleVoteClick(props.painting.id)
          }}>
            <i className="large caret up icon" />
            {props.painting.votes} votes
          </a>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <Button color="blue">
              <i className="add circle icon" />
              More Info
            </Button>
            <Button color="red">
              Delete It
              <i className="trash icon" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

export default PaintingCard
