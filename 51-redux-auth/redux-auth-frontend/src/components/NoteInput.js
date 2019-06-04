import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions'

class NoteInput extends React.Component {
  state = {
    value: ''
  };

  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    
    fetch('http://localhost:4000/api/v1/notes', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({note: {
        text: this.state.value,
        subject_id: this.props.subjectId
      }})
    })
    this.props.addNote(this.state.value);

    this.setState({
      value: ''
    });
  };

  render() {
    console.log('NOTE INPUT PROPS', this.props)
    return (
      <div className="ui input">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.value} type="text" />
          <button
            className="ui primary button"
            type="submit"
          >
            Add a Note
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    subjectId: state.subjectsReducer.activeSubjectId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNote: (text) => dispatch(addNote(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteInput);
