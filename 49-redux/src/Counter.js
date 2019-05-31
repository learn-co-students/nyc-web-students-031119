import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {

  // increment = (amount) => {
  //   this.props.dispatch({type: "INCREMENT", amount: amount})
  //   // this.setState(prevState => ({ count: prevState.count + 1 }));
  // };
  //
  // decrement = () => {
  //   this.props.decrement()
  //   // this.props.dispatch({type: "DECREMENT"})
  //   // store.dispatch({type: "DECREMENT"})
  //   // this.setState(prevState => ({ count: prevState.count - 1 }));
  // };



  render() {
    console.log("THE COUNTER PROPS ARE", this.props);
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button onClick={() => this.props.decrement()}> - </button>
        <button onClick={() => this.props.increment(1)}> + </button>
        <button onClick={this.props.increment.bind(null, 5)}> + 5 </button>
        <button onClick={() => this.props.increment(10)}> + 10 </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // {currentUser: {id 1, username: "whatever"}}
  // console.log('whatIsThis', whatIsThis);

  // whatever this function returns, will become the additional props of the component
  return {
    mike: "Cheng!!",
    color: "blue",
    jeffIsHere: true,
    count: state.count,
    loggedIn: state.currentUser
  }
}

// const INCREMENT = "INCREMENT"
const incrementActionCreator = (amount) => (
  {
    type: "INCREMENT",
    amount
  }
)

const mapDispatchToProps = (dispatch) => {
  return {
    decrement: () => dispatch({type: "DECREMENT"}),
    increment: (amount) => dispatch({type: "INCREMENT", amount })
  }
}

// least abstract
// not pass a second arg to connect, and just manually call dispatch with an action

// more abstract
// write your own mapDispatchToProps fn, its a fn which will be invoked with dispatch
// the keys of the object it returns become the props of your component
// those props are fns which dispatch an action

// most abstract
// pass an OBJECT as second arg to connect,
// the keys of the obj will become the components props
// the values are fns,
// the return values of those fns will AUTOMATICALLY be dispatched to the store
const objThatWillBecomeProps = {
  increment: (amount) => ({type: "INCREMENT", amount: amount}),
  decrement: () => ({type: "DECREMENT"})
}

export default connect(mapStateToProps, objThatWillBecomeProps)(Counter)
