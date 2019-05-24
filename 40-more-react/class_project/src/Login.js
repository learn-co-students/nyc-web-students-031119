import React from 'react';

const initialState = {
  error: false,
  fields: {
    username: '',
    password: ''
  }
}

class Login extends React.Component {
  constructor() {
    super();
    this.state = initialState
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state.fields);
    this.setState(initialState)
  };

  render() {
    const { fields } = this.state
    return (
      <div>
        <div className="ui form error">
          {
            this.state.error &&
            <div className="ui error message">
              Try Again
            </div>
          }
          <form onSubmit={this.handleSubmit}>
            <div className="ui field">
              <label>Username</label>
              <input
                name="username"
                placeholder="username"
                value={fields.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="password"
                value={fields.password}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="ui basic green button">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
