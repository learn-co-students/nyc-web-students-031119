import React from 'react'
import Child from './Child'

export default class Parent extends React.Component {
  render(){
    return (
      <div style={{ 
        border: `1px solid`, 
        margin: 10, 
        textAlign: 'center' 
      }}>
        <p onClick={this.click}>Parent</p>
        <Child name="child"/>
      </div>
    );
  }
}