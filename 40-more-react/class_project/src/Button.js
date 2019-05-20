import React from 'react'

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

export default Button
