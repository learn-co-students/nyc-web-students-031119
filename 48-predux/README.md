Predux
======

## SWBATs
Take what they learned in Mods 1 through 4 and use them as examples to explain these concepts in programming:

- [ ] message passing
- [ ] abstraction
- [ ] layers
- [ ] APIs

## Lecture Overview

[**Message Passing**](https://en.wikipedia.org/wiki/Message_passing) per Wikipedia:

> message passing is a technique for invoking behavior (i.e., running a program) on a computer. The invoking program sends a message to a process (which may be an actor or object) and relies on the process and the supporting infrastructure to select and invoke the actual code to run. Message passing differs from conventional programming where a process, subroutine, or function is directly invoked by name.

1. Message passing is a technique for invoking behavior (i.e., running a program) on a computer.
  - Message passing is a technique for getting the computer to do something.
2. The invoking program sends a message to a process (which may be an actor or object) and relies on the process and the supporting infrastructure to select and invoke the actual code to run.
  - Send a message to X, trusts that X will do what it's told to do.
3. Message passing differs from conventional programming where a process, subroutine, or function is directly invoked by name.
  - No separate methods. Just one method to rule them all.



Mod 1

ruby(my_file.rb)
ruby another_file.rb

.send


Mods 2 & 3

request response

router

GET /dogs dogs#index
GET /dogs/8 dogs#show
POST /dogs body: JSON.stringify(data) dogs#create
params

if else

switch


Mod 4

state = {
  name: "pa rivers",
  meanSpirited: "theo",
  counter: 8
}

this.setState({meanSpirited: "alex"})



```js
const state = {
  counter: 0,
  isRaining: false
}



// when the fn is invoked, we should increment the counter by 1
const changeState = (state) => {
  state.counter += 1

  return state
}

// changeState(state)
// {counter: 1}


// increment and decrement

const changeState = (state, message) => {
  return {
    ...state,
    ...message
  }
}

changeState(state, {counter: 12})


const changeState = (state, message) => {
  if (message === "increment") {
    state.counter += 1
  } else if (message === 'decrement') {
    state.counter -= 1
  }

  return state
}

changeState(state, "increment")
changeState(state, "decrement")



const increment = (val) => {
  changeState(state, "increment")
}
// but sometimes we want to decrement or increment by any arbitrary value
const changeState = (state, message, params = null) => {
  // if (message === "increment") {
  //   state.counter += params
  // } else if (message === 'decrement') {
  //   state.counter -= params
  // } else if (message === 'toggleRaining') {
  //   state.isRaining = !state.isRaining
  // }

  switch(message) {
    case "increment":
      return {...state, counter: state.counter += params}
    case "decrement":
      return {...state, counter: state.counter -= params}
    default:
      return state
  }

  return state
}

changeState(state)
changeState(state, "increment", 5)
changeState(state, "decrement", 3)
changeState(state, "toggleRaining")



const changeState = (state, action) => {
  if (message === "increment") {
    state.counter += 1
  } else if (message === 'decrement') {
    state.counter -= 1
  }

  return state
}

chnageState(state, {type: "increment", amount: 9})
chnageState(state, {type: "decrement", amount: 1})

```
