import React from 'react';
import { connect } from 'react-redux';
import {changeActiveSubject} from '../actions';

class SubjectTabs extends React.Component {
  handleClick = id => {
    this.props.changeActiveSubject(id);
  };

  render() {
    const tabs = this.props.tabs.map(tab => (
      <div
        key={tab.id}
        className={tab.active ? 'active item' : 'item'}
        onClick={() => this.handleClick(tab.id)}
      >
        {tab.title}
      </div>
    ));
    return <div className="ui top attached tabular menu">{tabs}</div>;
  }
}

const mapStateToProps = state => {
  console.log('SUBJECTS TAB REDUX STATE: ', state)
  return {
    tabs: state.subjectsReducer.subjects.map(subj => ({
      id: subj.id,
      title: subj.title,
      active: subj.id === state.subjectsReducer.activeSubjectId
    }))
    // tabs: 'nothing'
  };
};

export default connect(mapStateToProps, {changeActiveSubject})(SubjectTabs);
