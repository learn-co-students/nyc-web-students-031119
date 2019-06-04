import { createStore } from "redux";
import reducer from './reducers'
// imports from index.js

const store = createStore(reducer)

export default store;