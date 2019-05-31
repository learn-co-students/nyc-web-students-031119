# Why Redux
# 3 big ideas
- we will store all of our state in one big js object (state, state tree) _global_
- to change the state of this object we will send a message that describes how we want to chaneg the state (messages are called actions)
- to actually change the state we will use a pure fn called a reducer
(doesnt mutate state, it will always a return a new copy of state. Pure fns have no side effects)
if you could replace the fn call with the return value, its probably a pure fn

puts 7 + 1
puts additon(3, 4) + 1


Predictable, easy to reason state management tool.



![gif](http://g.recordit.co/s2OFw0VtYb.gif)

The code you clone down will have the functionality working as seen above.  

_Note that all components are defined in the same file (index.js). While this is not conventional, it will make our jobs a little easier as we begin to refactor to redux._

## Your task

Take a look at the current component structure. `App` renders a div with two children, `Header` and `Counter`.  Your goal is to make the changes described below _without altering the current structure of which parent components render which child components._

* Remove the code that calculates and renders the line `The current count is less than <some number>` from the `Counter` component.
* Add that same description about the current count (feel free to use the same code) **in the `Header` component in place of the text that currently says "Welcome to React"**


When lecture begins be prepared to discuss and summarize what you had to do in order to implement this change and why you had to do it.

While this code is all written in the same file for demonstration purposes, your solution should follow normal React practices.
