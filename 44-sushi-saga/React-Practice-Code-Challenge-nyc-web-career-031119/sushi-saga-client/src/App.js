import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"
const NUM_SUSHI = 4

class App extends Component {
  state = {
    sushis: [],
    startIndex: 0,
    wallet: 100
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      const updatedSushis = sushis.map(sushi => ({...sushi, eaten: false}) )
      this.setState({sushis: updatedSushis})
    })
  }

  handleMoreSushiClick = () => {
    // this.setState({startIndex: this.state.startIndex + NUM_SUSHI})
    this.setState(prevState => {
      return {startIndex: prevState.startIndex + NUM_SUSHI}
    })
  }

  handleEatSushiClick = (id) => {
    // console.log('im clicked!!!!', id, this);
    const price = this.state.sushis.find(s => s.id === id).price
    if (this.state.wallet - price > 0) {
      const updatedSushis = this.state.sushis.map(sushi => {
        if (sushi.id === id) {
          return {...sushi, eaten: true}
        } else {
          return sushi
        }
      })


      this.setState(prevState => {
        return {
          sushis: updatedSushis,
          wallet: prevState.wallet - price
        }
      })
    }
  }

  render() {
    console.log('App is rendering', this.state);
    const { startIndex, sushis } = this.state

    const sushisToDisplay = sushis.slice(startIndex, startIndex + NUM_SUSHI)
    const eatenSushi = sushis.filter(sushi => sushi.eaten)

    return (
      <div className="app">
        <SushiContainer
          sushis={sushisToDisplay}
          onMoreSushiClick={this.handleMoreSushiClick}
          onEatSushiClick={this.handleEatSushiClick}
        />
        <Table wallet={this.state.wallet} eatenSushi={eatenSushi}/>
      </div>
    );
  }
}

export default App;
