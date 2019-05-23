import React from 'react'
import withRandomColor from './hocs/withRandomColor'


const Button = (props) => {
  return (
    <div
      className={`ui ${props.color} button`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}

export default withRandomColor(Button)
