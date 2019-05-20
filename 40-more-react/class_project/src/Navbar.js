import React from 'react'
import Button from './Button'
import PainterestIcon from './PainterestIcon'

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
        <a className='item' href="/">
          <h2 className="ui header">
            <PainterestIcon icon={this.props.icon}/>
            <div className="content">
              {this.props.title}
            </div>
          </h2>
        </a>
        <div className="item" onClick={() => this.props.handlePageClick("all")}>
          All Paintings
        </div>
        <div className="item" onClick={() => this.props.handlePageClick("add")}>
          Add a Painting
        </div>
        <div className="right floated item">
          <Button onClick={this.handleColorClick}>
            Change Color
          </Button>
        </div>
      </div>
    )
  }
}

export default Navbar
