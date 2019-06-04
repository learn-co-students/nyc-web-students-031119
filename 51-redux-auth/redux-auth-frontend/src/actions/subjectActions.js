import {GET_ALL_SUBJECTS} from './types'

export const getAllSubjects = (subjects) => {
  return {
    type: GET_ALL_SUBJECTS,
    payload: subjects
  }
}