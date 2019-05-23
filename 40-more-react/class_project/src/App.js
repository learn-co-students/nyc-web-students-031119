import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Login from './Login'
import PaintingContainer from './PaintingContainer'
import About from './About'


class App extends React.Component {

  state = {
    // page: "",
    mike: "cheng"
  }

  handlePageClick = (page) => {
    this.setState({ page })
  }

  renderPage() {
    switch(this.state.page) {
      case "about":
        return <About />
      case "login":
        return <Login />
      case "add":
      case "all":
        return <PaintingContainer/>
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
          <Switch>
            <Route exact path="/" component={() => <h1>Hello</h1>} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/paintings" component={PaintingContainer} />
          </Switch>
        </div>
      </Fragment>
    )
  }
}

export default App;
