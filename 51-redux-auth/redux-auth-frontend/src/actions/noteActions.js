import {
  ADD_NOTE,
  CHANGE_ACTIVE_SUBJECT
} from './types'

export const addNote = text => dispatch => {
  console.log(text)
  return {
    type: ADD_NOTE,
    payload: {
      text: text,
      id: Date.now()
    }
  }
};

export const deleteNote = id => {
  // this one is on hold
  return {

  }
};

export const changeActiveSubject = id => {
  return {
    type: CHANGE_ACTIVE_SUBJECT,
    payload: id
  }
}
