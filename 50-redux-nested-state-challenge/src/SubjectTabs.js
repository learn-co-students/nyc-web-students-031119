import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class SubjectTabs extends React.Component {
  handleClick = id => {
    this.props.changeActiveSubject(id);
  };

  render() {
    console.log('SUBJECT TABS ACTIONS', actions)
    console.log('SUBJECT TABS PROPS', this.props)
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
  return {
    tabs: state.subjects.map(subj => ({
      id: subj.id,
      title: subj.title,
      active: subj.id === state.activeSubjectId
    }))
  };
};

export default connect(mapStateToProps, actions)(SubjectTabs);
