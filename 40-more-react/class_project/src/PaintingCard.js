import React from 'react'

class PaintingCard extends React.Component {
  // console.log('PaintingCard props', props.painting);

  // state = {
  //   votes: this.props.painting.votes,
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



  render() {
    const painting = this.props.painting
    // console.log('the new votes are', this.state.votes);
    // console.log(this.state.votes);
    // console.log(this.props);
    return (
      <div className="item">
        <div className="ui small image">
          <img src={this.props.painting.image} alt={this.props.painting.slug}/>
        </div>
        <div className="middle aligned content">
          <div className="header">{this.props.painting.title} by {this.props.painting.artist.name}</div>
          <div className="description">
          <a href="/" onClick={(e) => {
            e.preventDefault()
            this.props.onClick(this.props.painting.id)
          }}>
              <i className="large caret up icon" />
              {this.props.painting.votes} votes
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default PaintingCard
