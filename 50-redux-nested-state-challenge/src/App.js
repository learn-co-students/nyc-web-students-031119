import React, { Component } from 'react';

import NoteView from './NoteView';
import NoteInput from './NoteInput';
import SubjectTabs from './SubjectTabs';

class App extends Component {
  render() {
    return (
      <div className="ui centered container">
        <div className="ui segment">
          <SubjectTabs />
          <NoteView />
          <NoteInput />
        </div>
      </div>
    );
  }
}

export default App;
