import React from 'react';
import Navbar from './Navbar'
import PaintingList from './PaintingList'
import PaintingForm from './PaintingForm'
import paintings from './artworks'

// const App = (props) => {
//   return (
//     <div className="App">
//       {props.title}
//     </div>
//   );
// }


class App extends React.Component {


  state = {
    page: "all",
    paintings: paintings.sort((a, b) => b.votes - a.votes),
    mike: "cheng"
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
      case "all":
      return <PaintingList
                paintings={this.state.paintings}
                handleVoteClick={this.handleVoteClick}
               />
      case "add":
        return <PaintingForm handleSubmit={this.handleSubmit}/>
      default:
        return <PaintingList />
    }
  }

  handleSubmit = (painting) => {
    const newPainting = {
      image: painting.imageUrl,
      artist: {name: painting.artistName },
      title: painting.title,
      votes: 2003,
      id: painting.imageUrl
    }
    // console.log(newPainting);

    this.setState(prevState => {
      return {
        paintings: [
          newPainting,
          ...prevState.paintings
        ]
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar
          title={this.props.title}
          icon="paint brush"
          handlePageClick={this.handlePageClick}
        />
        <div className="ui container">
          {
            this.renderPage()
          }
        </div>
      </div>
    )
  }
}

export default App;
