import React from 'react'
import Grandchild from './Grandchild'

export default class Child extends React.Component {
  render(){
    return (
      <div style={{ 
        border: `1px solid`, 
        margin: 10, 
        textAlign: 'center' 
      }}>
        <p onClick={this.click}>Child</p>
        <Grandchild name="grandchild"/>
      </div>
    );
  }
}