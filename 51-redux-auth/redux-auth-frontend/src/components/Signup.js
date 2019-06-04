import React, { Component } from 'react'

class Signup extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        Signup Form
        <form onSubmit={this.handleSubmit}>
          <input 
            name='username' 
            onChange={this.handleChange} 
            value={this.state.username} 
            type="text" 
          />
          <input
            name='password'
            onChange={this.handleChange}
            value={this.state.password}
            type="text"
          />
          <button
            className="ui primary button"
            type="submit"
          >
            Signup
          </button>
        </form>

      </div>
    )
  }
}

export default Signup