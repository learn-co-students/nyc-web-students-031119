import React, { Component } from 'react';

class ClassComponent extends Component {

  constructor(props){
    super()
    // TL:DR dont fetch in the constructor
    console.log("Constructor: ", props.name )

    this.state = {mike: "cheng"}
  }

  componentDidMount() {
    // fetch in CDM
    // can setState
    // intervals, timeouts
    console.log("CDM: ", this.props.name);
  }

  componentDidUpdate(props) {
    console.log("CDU: ", this.props.name);
    // if (props) {
    //   this.setState({})
    //
    // }
    // invoked when the state changes
    // or when the component is receiving new props
  }

  componentWillUnmount() {
    // clear Intervals

    // close a websocket connection

    // Auto save
  }


  render() {
    console.log("Render: ", this.props.name )
    // this.setState({})
    return (
      <div style={{
        border: `1px solid ${this.props.color}`,
        margin: 10,
        textAlign: 'center'
      }}>
        <p onClick={() => {this.setState({mike: "CHENG!"})}} style={{ color: this.props.color }}>{this.props.name}</p>
        {this.props.children}
      </div>
    );
  }
}

ClassComponent.defaultProps = {
  color: 'black'
}

export default ClassComponent;
