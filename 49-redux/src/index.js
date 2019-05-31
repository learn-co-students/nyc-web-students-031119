import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import { createStore } from 'redux'
// we use 1 time in the application, 1 time only
// at the top of our application
import { Provider } from 'react-redux'

// store is just an object with some methods
// getState - this is a reader method, returns whatever the state is that the redux store knows about

// dispatch

// GET /pizzas
// POST /pizzas params
// {type: "LOGOUT"}
// {type: "SIGN_IN", user: {}, userId: 10}

// const initialState = {
//   isRaining: false,
//   mike: "Cheng",
//   count: 1765
// }


const initialState = {
  isRaining: false,
  cheng: "mike",
  count: 100
}

const reducer = (state = initialState, action) => {
  console.log('State Changer is called!');
  console.log('the current state is', state);
  console.log('the action is', action);
  // if (action.type === "START_RAINING") {
  //   return {...state, isRaining: true}
  // } else if (action.type === "INCREMENT") {
  //   return {...state, count: state.count + 1}
  // } else if (action.type === "DECREMENT") {
  //   return {...state, count: state.count - 1}
  // }

  switch(action.type) {
    case "INCREMENT":
      return {...state, count: state.count + action.amount}
    case "DECREMENT":
      return {...state, count: state.count - 1}
    default:
      return state
  }
}




// subscribe gets called each time we send a message to the store after the reducer is called
const store = createStore(reducer)



store.subscribe(() => {
  console.log('the new state is', store.getState());
})



// debugger

// stateTree = {counter: 0}
// componentTree {name: App, children: [
//   {name: Header, chidlren: [], state},
//   {name: Counter, chidlren: [], state},
// ]}
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         {
//           store.getState().counters.map(counter => <Counter />)
//         }
//       </div>
//     );
//   }
// }

// class Header extends Component {
//   componentDidMount() {
//     store.subscribe(() => this.setState({}))
//   }
//
//   renderDescription = () => {
//     const remainder = store.getState().count % 5;
//     const upToNext = 5 - remainder;
//     return `The current count is less than ${store.getState().count + upToNext}`;
//   };
//
//   render() {
//     return (
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">Welcome to React</h1>
//         <h3>{this.renderDescription()}</h3>
//       </header>
//     );
//   }
// }

// class Counter extends Component {
//
//   componentDidMount() {
//     store.subscribe(() => this.setState({}))
//   }
//
//   increment = (amount) => {
//     store.dispatch({type: "INCREMENT", amount: amount})
//     // this.setState(prevState => ({ count: prevState.count + 1 }));
//   };
//
//   decrement = () => {
//     store.dispatch({type: "DECREMENT"})
//     // this.setState(prevState => ({ count: prevState.count - 1 }));
//   };
//
//
//
//   render() {
//     return (
//       <div className="Counter">
//         <h1>0</h1>
//         <button onClick={this.decrement}> - </button>
//         <button onClick={() => this.increment(1)}> + </button>
//         <button onClick={() => this.increment(5)}> + 5 </button>
//         <button onClick={() => this.increment(10)}> + 10 </button>
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
