import {
  LOGIN, 
  SIGNUP,
  LOGOUT
} from './types'


export const login = (user) => {
  return {
    type: LOGIN,
    payload: user
  }
  // we want fetch
  // dispatch all th4e goods
}

export const signup = (user) => {
  return {
    type: SIGNUP,
    payload: user
  }
}

export const logout = ({
  type: LOGOUT
})

export const autoLogin = (user) => {
  // fetch('localhost:4000/api/v1/auto_login')
  //   .then(r => r.json())
  //   .then(data => {
  //     data 
  //     dispatch({user: data})
  //   })
  return {
    type: LOGIN,
    payload: user
  }
}