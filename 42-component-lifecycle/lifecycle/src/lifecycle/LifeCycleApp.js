import React from 'react'
import ClassComponent from './ClassComponent'


export default class LifeCycleApp extends React.Component {
  render(){
    return (
      <ClassComponent name="great grandparent">
        <ClassComponent name="grandparent">
          <ClassComponent name="parent">
            <ClassComponent name="child">
              <ClassComponent name="grand child" />
            </ClassComponent>
          </ClassComponent>
        </ClassComponent>
      </ClassComponent>
    )
  }
}
