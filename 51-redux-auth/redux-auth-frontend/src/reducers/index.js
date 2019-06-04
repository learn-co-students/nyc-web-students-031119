import { combineReducers } from "redux";
import subjectsReducer from './subjectsReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
  usersReducer,
  subjectsReducer
})


// const reducer = (state = {init: 'inital stiate'}, action ) = {
//   switch action.type: 
//     case 'login':
//       return state
//     default: 
//       return state

// }  WHAT OUR CURRENT SATTE WOUDL LOOK LIKE = {init: 'initial state'}
export default rootReducer