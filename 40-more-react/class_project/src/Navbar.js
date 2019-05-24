import React from 'react'
import { Link } from 'react-router-dom'

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black'
];

class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      color: colors[Math.floor(Math.random() * colors.length)]
    }

    // this.handleColorClick = this.handleColorClick.bind(this)
  }

  handleColorClick = () => {
    console.log('handleColorClick was called');
    console.log('this is', this);
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    this.setState({color: randomColor})
  }

  render() {
  //   console.log('Navbar starts rendering');
  //   console.log('state is', this.state, this);
    // const { title, color, icon } = this.props
    return (
      <div className={`ui inverted ${this.state.color} menu`}>
        <Link
          className='item'
          to="/about"
        >
          <h2 className="ui header">
            <i className={`${this.props.icon} icon`}></i>
            <div className="content">
              {this.props.title}
            </div>
          </h2>
        </Link>
        {
          this.props.currentUser &&
          <div className="item">
            {`Welcome ${this.props.currentUser.username}`}
          </div>
        }
        <div className="item">
          {
            this.props.currentUser ?
            <div onClick={this.props.handleLogout}>
              Logout
            </div>
            :
            <Link to="/login">
            Login
            </Link>
          }
        </div>
        <div className="item">
          <Link to="/paintings">
            All Paintings
          </Link>
        </div>
        <div className="item">
          <Link to="/paintings/new">
            Add a Painting
          </Link>
        </div>
        <div className="right floated item">
          <button
          onClick={this.handleColorClick}
          className="ui button"
          >
            Change Color
          </button>
        </div>
      </div>
    )
  }
}

export default Navbar
