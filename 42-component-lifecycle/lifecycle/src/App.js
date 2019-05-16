import React from 'react';
import './App.css';
import LifeCycleApp from "./lifecycle/LifeCycleApp"

class App extends React.Component {

  componentDidMount() {
    console.log("CDM: ", "App");
  }


  render() {

    return (
      <div className="App">
      <LifeCycleApp />
      </div>
    );
  }
}

export default App;
