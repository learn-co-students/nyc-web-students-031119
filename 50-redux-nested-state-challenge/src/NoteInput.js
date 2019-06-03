import React from 'react';
import { connect } from 'react-redux';
import { addNote } from './actions'

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
    // PROBLEM
    this.props.addNote(this.state.value);

    this.setState({
      value: ''
    });
  };

  render() {
    console.log('NOTE INPUT PROPS' , this.props)
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

const mapDispatchToProps = dispatch => {
  return {
    addNote: (text) => dispatch(addNote(text))
  }
}

export default connect(null, mapDispatchToProps)(NoteInput);
