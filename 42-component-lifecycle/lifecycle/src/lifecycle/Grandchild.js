import React from 'react'

export default class Grandchild extends React.Component {
  render(){
    return (
      <div style={{ 
        border: `1px solid`, 
        margin: 10, 
        textAlign: 'center' 
      }}>
        <p onClick={this.click}>Grandchild</p>
      </div>
    );
  }
}