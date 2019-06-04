import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LOGIN } from '../actions/types';
import { login } from '../actions/userActions';
import { getAllSubjects } from '../actions/subjectActions';


class Login extends Component {
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

    fetch('http://localhost:4000/api/v1/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        user: this.state
      })
    })
      .then(r => r.json())
      .then(data => {
        const { token, user } = data
        localStorage.setItem('token', token)
        
        // fetch('http://localhost:4000/api/v1/subjects')
        //   .then(r => r.json())
        //   .then(data => {
        //     console.log(data)
            
        //     // dispatch to our global redux all mighty store the subject info
        //     this.props.getAllSubjects(data)

        //   })

        this.props.login(user)
        // this.props.dispatch({
        //   type: LOGIN,
        //   payload: user
        // })
        // dispatch a login
      })
  }

  render() {
    console.log('LOGIN FORM props: ', this.props)
    return (
      <div>
        Login Form
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
            Login
          </button>
        </form>

      </div>
    )
  }
}

export default connect(null, { login, getAllSubjects })(Login)