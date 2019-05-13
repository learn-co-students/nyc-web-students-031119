Intro to React // JSX & Props
=============================

## SWBATs

- [] Visualize/Identify Components on any website
- [] Explain what a Component is conceptually in the UI
- [] Explain what a React Component actually is in code (an object, made by a class)
- [] Use JSX to build custom components and render them in the browser
- [] Briefly explain Babel's purpose in React


- [] Understand how `create-react-app` works and what it offers a developer
- [] Organize code into files and use the import-export syntax to pass code between files
- [] Setup a new React app and play around with building UIs
- [] Use props to make components more dynamic and reusable
- [] See how props are to components as arguments are to functions
- [] Begin to build modular & reusable components

- [] **BONUS** Use the `children` prop


<!-- <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script> -->


## Declarative vs Imperative Programming
#### *IMPERATIVE*
1. Go get the ingredients
2. Lay down the bread
3. Lay down the toppings
4. Add sauces
5. Smush

#### *DECLARATIVE*
1. Order a sandwich and tell them what toppings you want
2. Sandwich comes out

Declarative programming is an abstraction of imperative programming: when you order the sandwich, someone is still imperatively doing all of the necessary steps to make a sandwich, but you as a customer you simply declare what you want and receive the outcome.

## Slow abstraction to JSX

First form: *STATIC HTML*
```jsx
ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <h1>Hello, beef!</h1>
    <h1>Hello, squid!</h1>
  </div>,
  document.getElementById('root')
);
```


Second form: *Dynamic, reusable components using regular functions and arguments*
```jsx
function Greeting(phrase,name){
  return <h1>Hello {phrase}! - {name}</h1>
}

ReactDOM.render(
  <div>
    {Greeting("world", "Alex")}
    {Greeting("beef", "Peter")}
    {Greeting("squid", "Katarina")}
  </div>,
  document.getElementById('root')
)
```

THIRD FORM: *Static components using JSX*
```jsx
function Greeting(){
  return <h1>Hello world!</h1>
}

ReactDOM.render(
  <div>
    <Greeting />
    <Greeting />
    <Greeting />
  </div>,
  document.getElementById('root')
)
```

FINAL FORM: *Dynamic, reusable components using JSX and props*
```jsx
function Greeting(props){
  return <h1>Hello {props.phrase}! - {props.name}</h1>
}

ReactDOM.render(
  <div>
    <Greeting phrase="world" name="Alex"/>
    <Greeting phrase="beef" name="Peter"/>
    <Greeting phrase="squid" name="Katarina"/>
  </div>,
  document.getElementById('root')
)
```

## Thinking about props

In thinking about props, repeat this mantra: props are to components as arguments are to functions!

Think back to mod 1:
Before ActiveRecord, you passed in arguments one by one and in a particular order: `User.new("Alex", 23, "therapist"`

With ActiveRecord, you passed a single hash and mapped your values onto the specific keys they corresponded to:
`User.new(name: "Alex", age: 23, occupation: "therapist"`

This is very much analogous to the change over from regular ol' JS functions to JSX components

```jsx
// A regular ol' JS function with arguments <-- THE PAST
function Greeting(phrase, name){
  return <h1>Hello {phrase}! - {name}</h1>
}

// A JSX component using props <-- THE REACT WAY
function Greeting(props){
  return <h1>Hello {props.phrase}! - {props.name}</h1>
}
```

App ideas

Ninja Tinda


<!-- Game of Thrones Spoiler App -->
