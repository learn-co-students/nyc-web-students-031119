import React, { PureComponent } from 'react'

// class PaintingCard extends React.Component {
//   state = {confirmation: false}
  // console.log('PaintingCard this.props', props.painting);

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


  // class Button extends React.Component {
  //   render() {
  //     // console.log("Button Props", this.props);
  //     return (
  //       <div className={`ui basic ${this.props.color} button`}>
  //         {this.props.children}
  //       </div>
  //     )
  //   }
  // }

  // <div className="ui basic blue button">
  //   <i className="add circle icon" />
  //   More Info
  // </div>

  // <div className="ui button basic red" onClick={props.toggleDeleteClick}>
  //   <i className="trash icon" />
  //   Delete It
  // </div>


class PaintingCard extends PureComponent {

  render() {
    // console.log('the new votes are', this.state.votes);
    // console.log(this.state.votes);
    // console.log("Painting Card is rendering", this.props);
    return (
      <div className="ui card">
        <div className="image">
          <img src={this.props.painting.image} alt={this.props.painting.slug}/>
        </div>
        <div className="content">
          { this.props.painting ? <div className="header">{this.props.painting.title}</div> : null }
          <div className="meta">by {this.props.painting.artist.name}</div>
        </div>
        <div className="content">
          <a href="/" onClick={(e) => {
            e.preventDefault()
            this.props.handleVoteClick(this.props.painting.id)
          }}>
            <i className="large caret up icon" />
            {this.props.painting.votes} votes
          </a>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic blue button">
              <i className="add circle icon" />
              More Info
            </div>
            <div
              className="ui basic red button"
              onClick={this.props.toggleDeleteClick}
            >
              <i className="trash icon" />
              Delete It
            </div>
          </div>
        </div>
      </div>
    );
   }
  }

export default PaintingCard
