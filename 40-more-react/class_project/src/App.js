import React, { Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'

import Navbar from './Navbar'
import Login from './Login'
import PaintingContainer from './PaintingContainer'
import About from './About'


class App extends React.Component {

  state = {
    // page: "",
    mike: "cheng",
    currentUser: null
  }

  componentDidMount() {
    const token = localStorage.getItem("token")
    // 1
    // hjfashfsa.hjafksd.bjkafd
    console.log('token is', token);
    if(token) {
      fetch("http://localhost:3001/api/v1/current_user", {
        headers: {
          Authenticate: token
        }
      })
      .then(r => r.json())
      .then((user) => {
        if (!user.error) {
          this.setState({currentUser: user})
        }
      })
    }
  }

  handlePageClick = (page) => {
    this.setState({ page })
  }

  handleUserLogin = (user) => {
    localStorage.setItem("token", user.token)
    this.setState({currentUser: user})
  }

  handleLogout = () => {
    localStorage.removeItem("token")

    this.setState({currentUser: null})
    this.props.history.push("login")
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
    console.log('App is rendering', this.state);
    return (
      <Fragment>
        <Navbar
          title={this.props.title}
          icon="paint brush"
          handlePageClick={this.handlePageClick}
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <div className="ui container">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/login" render={() => {
              return <Login handleUserLogin={this.handleUserLogin}/>}
            }
            />
            <Route path="/paintings" component={PaintingContainer} />
          </Switch>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(App);
