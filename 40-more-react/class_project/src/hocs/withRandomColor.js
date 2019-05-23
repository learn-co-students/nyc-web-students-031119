import React from 'react'

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

const withRandomColor = (WrappedComponent) => {

  return class extends React.Component {
    render() {
      const color = colors[Math.floor(Math.random() * colors.length)]

      return <WrappedComponent color={color} {...this.props} />
    }
  }
}

export default withRandomColor
