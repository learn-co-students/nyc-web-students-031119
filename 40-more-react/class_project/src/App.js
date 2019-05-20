import React, { Fragment } from 'react';
import Navbar from './Navbar'
import PaintingList from './PaintingList'
import PaintingForm from './PaintingForm'
// import paintings from './artworks'

// const App = (props) => {
//   return (
//     <div className="App">
//       {props.title}
//     </div>
//   );
// }


// new PaintingList().myFunc()

class App extends React.Component {


  state = {
    page: "all",
    paintings: [],
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

  handleDeleteClick = (id) => {
    this.setState(prevState => {
      return {
        paintings: prevState.paintings.filter(pntg => pntg.id !== id)
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
                handleDeleteClick={this.handleDeleteClick}
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
    console.log('APP is rendering', this.state);
    // React.createElement()
    // => {}
    return (
      <div style={{backgroundColor: this.props.color}}>
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
