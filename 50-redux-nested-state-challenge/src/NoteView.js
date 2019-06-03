import React from 'react';
import { connect } from 'react-redux';

class NoteView extends React.Component {
  handleClick = id => {
    this.props.deleteNote(id);
  };

  render() {
    const notes = this.props.notes.map(note => (
      <div key={note.id} onClick={() => this.handleClick(note.id)}>
        {note.text}
      </div>
    ));
    return <div className="ui comments">{notes}</div>;
  }
}

const mapStateToProps = state => {  
  console.log('NOTE VIEW LINE 20 REDUX STATE', state)
  // WHICHONE IS ACTIVE find
  const activeSubject = state.subjects.find(subject => {
    return subject.id === state.activeSubjectId
  })

  return {
    notes: activeSubject.notes
  }
};


export default connect(mapStateToProps)(NoteView);
