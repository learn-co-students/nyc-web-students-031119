import {
  ADD_NOTE,
  CHANGE_ACTIVE_SUBJECT
} from './types'


const initialState = {
  activeSubjectId: 1,
  subjects: [
    {
      id: 1,
      title: 'React',
      notes: []
    },
    {
      id: 2,
      title: 'Redux',
      notes: []
    },
    {
      id: 3,
      title: 'Functional Programming',
      notes: []
    },
    {
      id: 4,
      title: 'Ruby',
      notes: []
    }
  ]
};

const reducer = (state = initialState, action) => {
  // based on action incoming do some specifc work
  switch (action.type) {
    case ADD_NOTE:
      const activeSubject = state.subjects.find(subject => subject.id === state.activeSubjectId)
      // action.payload = {text: text, id: id}
      activeSubject.notes = [...activeSubject.notes, action.payload]
      return {
        ...state,
        subjects: state.subjects.map(subject => subject.id === state.activeSubjectId ? activeSubject : subject)
      }
    case CHANGE_ACTIVE_SUBJECT:
      
      return {
        ...state,
        activeSubjectId: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
