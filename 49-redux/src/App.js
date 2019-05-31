import React, { Component } from 'react'
import './index.css';
import './App.css';

import Header from './Header'
import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Counter whatever="ice cream"/>
      </div>
    );
  }
}

export default App
