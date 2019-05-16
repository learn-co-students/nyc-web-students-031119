Component Lifecycle Methods
===========================


class Dog < ActiveRecord::Base
  belongs_to :pet_owner
  has_many :fleas

  validate :must_have_fleas
  after_create
  before_save :my_method


  def must_have_fleas

    #...
  end
end

## SWBATs

- [ ] Write methods that interact with data at different points throughout a component's life
- [ ] Identify the most-used Lifecycle Methods
- [ ] Identify problems caused by asynchronicity in React
- [ ] Explain why we `fetch` data using `ComponentDidMount`

## Outline


## Summary

Post React 16.3, some lifecycle methods were slated for deprecation in 17.0 (yet to be released) and new ones were introduced. These are the blogs/diagrams you'll want to read/see to explain each:

- [Old Lifecycle Methods Diagram](https://hackernoon.com/reactjs-component-lifecycle-methods-a-deep-dive-38275d9d13c0)
- [New Lifecycle Methods Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
  - [Original Source (a tweet by Dan Abramov)](https://twitter.com/dan_abramov/status/981712092611989509)
- [`setState` Cheatsheet](https://levelup.gitconnected.com/react-cheatsheet-this-setstate-8bc12c5f40f5)
- Remember, not all of what you will see is technically true. People have opinions.
- For example, here there are a few places where you _can_ put `setState`, but they would be code smells as you probably wouldn't want to be doing them in those lifecycle methods.
- The important part is understanding where you _mustn't_ put `setState` as it could cause an infinite loop. `render` being the most obvious place _not_ to do `setState`.

## Lecture Notes

### Most Commonly Used Methods
- *constructor(props)*
- *render()*
- *componentDidMount()*
- *componentDidUpdate(prevProps, prevState, snapshot)*
- *componentWillUnmount()*

### Birth (Mounting)
- *constructor(props)*
  - called before it is mounted
  - set initial state here
- static getDerivedStateFromProps(props, state)
  - invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.
- *render()*
  - called after mounting and updating
- *componentDidMount()*
  - invoked immediately after a component is mounted (inserted into the tree).
  - this is where you should request data from remote endpoints

### Life (Updating)
- static getDerivedStateFromProps(props, state)
  - invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.
- shouldComponentUpdate(nextProps, nextState)
  - invoked before rendering when new props or state are being received
  - returns boolean which determines if render should be called
- *render()*
  - called after mounting and updating
- getSnapshotBeforeUpdate(prevProps, prevState)
  - invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate()
- *componentDidUpdate(prevProps, prevState)*
  - invoked immediately after updating occurs. This method is not called for the initial render
  - watch out for infinite loops if setting state!

### Death (Unmounting)
- *componentWillUnmount()*
  -  invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().

### Benchmarking (Extra Reading)

* [How to Benchmark React Components](https://engineering.musefind.com/how-to-benchmark-react-components-the-quick-and-dirty-guide-f595baf1014c)
* [Lifecycle Methods](https://gist.github.com/alexgriff/1b5850cac9a1d565f0cb66a941505b99)
