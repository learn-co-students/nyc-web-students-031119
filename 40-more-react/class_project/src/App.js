import React, { Fragment } from 'react';

import Navbar from './Navbar'
import Login from './Login'
import PaintingContainer from './PaintingContainer'
import About from './About'


class App extends React.Component {


  state = {
    page: "",
    mike: "cheng"
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/paintings")
    .then(res => res.json())
    .then(data => {
      this.setState({paintings: data.sort((a, b) => b.votes - a.votes)})
    })
  }

  handleVoteClick = (id) => {
    console.log('the click happened', id)

    this.setState((prevState) => {
      return {
          paintings: prevState.paintings.map(pntg => {
          if(pntg.id === id) {
            return {...pntg, votes: pntg.votes + 1}
          } else {
            return pntg
          }
        }).sort((a,b) => b.votes - a.votes)
      }
    })

  }
  // if (this.state.page === "all") {
  //   <PaintingList />
  // } else {
  //   <PaintingForm />
  // }

  // handleAddClick = () => {
  //   this.setState({page: "add"})
  // }
  //
  // handleAllClick = () => {
  //   this.setState({page: "all"})
  // }

  handlePageClick = (page) => {
    this.setState({ page })
  }

  renderPage() {
    switch(this.state.page) {
      case "about":
        return <About />
      case "add":
      case "all":
        return <PaintingContainer page={this.state.page}/>
      case "login":
        return <Login />
      default:
        return <About />
    }
  }

  render() {
    return (
      <Fragment>
        <Navbar
          title={this.props.title}
          icon="paint brush"
          handlePageClick={this.handlePageClick}
        />
        <div className="ui container">
          {this.renderPage()}
        </div>
      </Fragment>
    )
  }
}

export default App;
