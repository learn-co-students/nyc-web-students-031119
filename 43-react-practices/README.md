React Best Practices
====================

## SWBAT

- [ ] Begin using the React Dev Tools
- [ ] Write cleaner React code
- [ ] Begin understanding the vastness of the React world

## Objectives

**Opinions**

- [ ] Code Organization
  - folders, imports, methods
- [ ] Presentational vs Container components
  - Explore the distinction and why everything is opinion

**The More You Know**

- [ ] Functional vs Class Components
Functional
Class => needs state, need lifecycle methods
hooks => new feature of React, allows for functional components to hook into All
features of React, including component state, and component lifecycle



  - [ ] Implicit return for Functional components
  - [ ] What is PureComponent?
- [ ] Fragments
- [ ] defaultProps and PropTypes
- [ ] Conditional Rendering:
  - [ ] short circuiting
  - [ ] Expression ternary JSX gotcha
- [ ] Callbacks (avoid useless wrapping)
- Syntax often seen in React:
  - [ ] Arrow functions returning objects
  - [ ] Destructuring
  - [ ] Spread (w/ prepend and append)
  - [ ] Objects with the same key/value name
  - [ ] constructor vs. ES7 instance variables
  - [ ] map (as a way to update objects in an array of objects)
  - [ ] Object.assign
  - [ ] { [variable]: "as_key" }

## Lecture Notes

### Functional Components

Alternative syntax for components that don't need:
- `state`
- Component Lifecycle Methods

**Syntax**

```javascript
import React, { Fragment } from 'react';

// Class Component
class NowSaying extends Component {
  render() {
    return (
      <Fragment>
        <h2>{this.props.header}:</h2>
        <p>{this.props.text}</p>
      </Fragment>
    )
  }
}

// Functional Component
function NowSaying(props) {
  return (
    <Fragment>
      <h2>{props.header}:</h2>
      <p>{props.text}</p>
    </Fragment>
  )
}

// Functional Component as an arrow function
const NowSaying = (props) => {
  return (
    <Fragment>
      <h2>{props.header}:</h2>
      <p>{props.text}</p>
    </Fragment>    
  )
}

// Functional Component as an arrow function with implicit return
// We can do this shorthand because we aren't doing anything else in our function.
const NowSaying = (props) => (
  <Fragment>
    <h2>{props.header}:</h2>
    <p>{props.text}</p>
  </Fragment>
)

// Destructuring our props inside the functional component
// We can now do stuff in our function and act like those props are our arguments.
// We can also use conditionals to setup default values for them.
const NowSaying = (props) => {
  const { header, text } = props;

  return (
    <Fragment>
      <h2>{props.header}:</h2>
      <p>{props.text}</p>
    </Fragment>
  )
}

// Destructuring props in argument
// Also going back to implicit return because we aren't doing anything inside.
const NowSaying = ({ header, text }) => (
  <Fragment>
    <h2>{header}:</h2>
    <p>{text}</p>
  </Fragment>
)

// Destructuring props in argument with default values!
const NowSaying = ({ header = "default", text = "" }) => (
  <Fragment>
    <h2>{header}:</h2>
    <p>{text}</p>
  </Fragment>
)

export default NowSaying;
```

### Presentational vs Container Components

Everything you need to know is in this article: [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- **Take note of his update at the top of the article!**

### Architecture - What makes a good component?

- Container vs. Presentational Components
- Many small components is better than a few big components
- logic in `render` vs. extracting
- If you have a method that returns JSX, consider making it a component
- Reduce State
- Reduce options
- Avoid `style=` and `className=` by using well-named components

consider:

```
<div style={{float: ‘left’, width: ‘80%’}}>
  Main content
</div>
<div style={{float: ‘left’, width: ‘20%’}}>
  Sidebar content
</div>
```

vs:

```
<Main>
  Main content
</Main>
<Sidebar>
  Sidebar content
</Sidebar>
```

### Syntax and Convention

- Destructuring Props
- Spread and Rest operators
- name props well (clear, consistent, concise)
  - Use the same key/value name in your objects
- constructor vs. ES7 instance variables (`state = { count: 0 }`)
- defaultProps and function default values
- Conditional rendering: ternaries vs. methods vs. short circuiting vs. IIFEs
- classnames [helper](https://github.com/JedWatson/classnames)
- separate your imports
- colocate your files
- avoid unneeded callbacks, e.g.:

```
const isActive = el => el.active;

flights.filter(flight => isActive(flight));
flights.filter(isActive);
```

### Cool Syntax Tricks

We already saw destructuring above. Here are a few more.

```javascript
// We can do this:
constructor(props) {
  super(props);

  this.state = {};
}
// Or we can do this:
state = {};
// This ECMAScript proposal is what let's use that
// and what lets us do arrow functions to autobind:
//     https://github.com/tc39/proposal-class-fields

// ==================================================

// Fake state object to play around with:
const lines = lecture.split(`\n`);
let state = {
  lines,
  isSpeaking: false,
  nextLine: 0,
  text: "",
}

// SPREAD!
// Can be used like slice to make copies.
const newLines = [...lines];

// But it has a few cool tricks up its sleeve
// append
const newLines = [...lines, "something else"];
// prepending
const newLines = ["something else", ...lines];

// ==================================================

// fiiiine
// making a quick array of objects with id and text
let index = 0;
let arrayOfObjects = lines.map(l => {
  return {
    id: index++,
    text: l,
  }
})

console.log(arrayOfObjects);

// Problem: We want to update one object in this array.
//          However, this is part of state so we can't mutate it.
// Solution A:
//     1. find index
//     2. manually reassign it
// Solution B: map
let newObject = { id: 2, text: "some new text" } // what we want to update to
let newArrayOfObjects = [...arrayOfObjects].map(o => {
  if (o.id === newObject.id) {
    return newObject;
  }
  return o;
})
console.log(newArrayOfObjects);

// ==================================================

// The setup:
let state = {
  lines,
  isSpeaking: false,
  nextLine: 0,
  text: "",
}

// We can spread objects too:
let newState = { ...state };
console.log(state === newState); // false

// We can add or overwrite keys like this:
let newState = { ...state, isSpeaking: true };
console.log(newState.isSpeaking) // true

// Or we can do the reverse:
let newState = { isSpeaking: true, ...state };
console.log(newState.isSpeaking) // false

// Lastly, if we want to use a variable with the same name as the key:
let isSpeaking = true;
let newState = { ...state, isSpeaking: isSpeaking };
// We can shorten it to:
let newState = { ...state, isSpeaking };
console.log(newState.isSpeaking) // true

// ==================================================

// If you are dealing with a ton of nested state and just want
// to test that your code works:
let newState = JSON.parse(JSON.stringify(state));
console.log(state === newState); // false
// This is a quick hack to make a brand new copy of an object.
// Drawbacks:
//     - Performance
```

### Gotchas

- https://github.com/timhwang21/react-gotchas
- capitalize ComponentNames
- set `displayName` property of component
- JSX Comments `{ /* comment  */ }` (not `// <Component>`)
- setting state from props (but if you do, use `getDerivedStateFromProps` not `componentDidUpdate`)
- setState is asynchronous
  - second arg to setState is called as a callback after state is actually set
  - if you pass a function to `setState`, it can return a new state
- short circuiting pattern leads to `"0"` rendering (coerce conditions to booleans if you want to use `&&`)

```
{ myCondition && <ComponentToShow> }
```

Renders '0' if `myCondition` is 0, because

```
0 && Something
=> 0
```

### Performance

> *Warning: Premature Optimization!* You usually don't have to think about performance issues. Don't actually do this until you need it!

**Initial load (time to interactive) vs. Update performance**

Performance improvements usually fall into two buckets:
- improving how fast the page initially loads (TTI or Time to Interactive)
- improving how fast updates feel (e.g. there's a lag when typing into an input)

Most React Performance guides have to do with the second. You're more likely to _actually_ want to improve the first. Improving initial load is hard, because it usually means reducing your _bundle size_. That usually means thinking about webpack and the packages you are using, not about React and on-page performance.


**Update performance tips:**
- Use the production build of React - it's different (and faster!) than the development build
- implementing `shouldComponentUpdate` is the heart of most react performance debugging
- extending PureComponent gives you a default implementation that will often lead to speedups
- indexes as array keys are slow -- unique, stable, predictable keys are fast
- Inline arrow functions get created on every render as a new object (slow) vs. methods on the class get declared once (`this.handleSomething`)


Resources and Tools:
- See more at https://reactjs.org/docs/optimizing-performance.html
- [why did you update](https://github.com/maicki/why-did-you-update)
- [using the chrome dev tools](https://building.calibreapp.com/debugging-react-performance-with-react-16-and-chrome-devtools-c90698a522ad)
- [using the react dev tools profiler](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)


### Advanced React Features

You don't need to use these in your apps, but you should read about them in the docs and know that they exist!

- Fragment: reduce your extra divs
- PropTypes: ensure that the right kinds of props are passed into your components (Typescript and Flow are more general solutions to this problem)
- Error Boundaries: when one component has an error, limit how much damage it will do to the rest of your app
- Portal: render a child somewhere else in the DOM
- Context: pass data to your descendants, skipping intermediate children
- Refs: get access to a DOM element or React component that you're rendering

### Advanced React Patterns

- Components that add behavior instead of adding DOM elements to the page
- Composition vs. Inheritance
  - HOCs (higher-order components): functions that take in components and return components
  - render props: props that are a) React components to render or b) functions to call, to render the result
  - callable function children: children are a function to be called instead of react components

### Tools

There are lots of awesome tools you can use that can make your React development process faster, safer, and easier.

- React Dev Tools
- Prettier
- Linter
- Snippets
- Syntax Highlighting
- React Storybook

### Learning and Improving

- React Docs
- awesome-react
- https://github.com/kylpo/react-playbook
