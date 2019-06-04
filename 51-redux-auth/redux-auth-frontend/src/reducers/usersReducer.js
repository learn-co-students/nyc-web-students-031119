import { 
  LOGIN, 
  LOGOUT, 
  SIGNUP 
} from "../actions/types";

const initialState = {
  user: null
}

const usersReducer = (state = initialState, action) => {
  console.log('USERSREDUCER IS CALLED w action: ', action)
  switch (action.type) {
    case LOGIN:
      return {
        user: action.payload
      }
    case LOGOUT:
      return {
        user: null
      }
    case SIGNUP: 
      return {
        user: action.payload
      }
    default:
      return state
  }
}

export default usersReducer