Redux Review

Things to cover:
- why redux
  - DRY
  - simplify huge state and its access to it
  - simplified design pattern to write and debug code
- what are the redux pain points
  - syntax
  - connecting each point/structure for each component
- what are the buzzwords/keywords and what do they mean?

store/createStore - global state
Provider- wrapper around App to provide global state
connect- mapStateToProps and mapDispatchToProps
mapStateToProps- gives access to Global State/store, you can define which pieces you want access to to each component that its wrapped around/ if MDTP not provided, it gives it fn dispatch props
mapDispatchToProps- abstracts dispatched actions that have access to change/update the global store
reducer- two arguments, state and action
  - returns new state
actions- object 
- {
  type: 'actionType',
  payload: string, number, array, {}
}

- types/constants
- what is the redux flow and why is each piece important

- combineReducers** maybe
- how does auth work with redux

Part I.

We can go over another example tomorrow even though this one was super simple imagine we implemented having a user

Just from a super high level can someone describe to me what we need to accomplish?
is happening and how we can make this happen with react and redux (this is not a problem I would initially attempt to solve with redux rather this is a simple implementation that is meant to show how it could be used and implemented)

What is going on here we are writing notes for a given subject in react/redux? What does our global store need to hold and how does this help us While this is a relatively simple app it still is designed with a pretty complex pattern

Let's walk through the flow of what is happening: 
- we have an input field, that is purely controlled by react and why does this make sense? 

- note is submitted then it is appended to a list of notes



What are the buzzwords from redux and what do they mean and where and how are they used?




Part II.
Slightly more advanced store set up with nested state it becomes a bit challenging to manipulate state in the reducer and to require out the necessary information in the given component

get used to using spread and feel free to add logic into either the action/actionCreator or the reducer
or even in the mapStateToProps




















Redux buzzwords

store/createStore
Provider
connect
mapStateToProps
mapDispatchToProps
reducer
actions
types/constants

Alex's Redux keywords
https://gist.github.com/alexgriff/0e247dee73e9125177d9c04cec159cc6

