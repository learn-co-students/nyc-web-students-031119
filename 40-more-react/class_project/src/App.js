import React from 'react';
import Navbar from './Navbar'
import PaintingList from './PaintingList'
import PaintingForm from './PaintingForm'

// const App = (props) => {
//   return (
//     <div className="App">
//       {props.title}
//     </div>
//   );
// }


class App extends React.Component {

  state = {page: "all"}

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
        return <PaintingList />
      case "add":
        return <PaintingForm />
      default:
        return <PaintingList />
    }
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
