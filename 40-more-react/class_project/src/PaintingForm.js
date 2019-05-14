import React from 'react'

class PaintingForm extends React.Component {
  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label>Title</label>
          <input type="text"/>
        </div>
        <button className="ui positive basic button">Add Painting</button>
      </form>
    )
  }
}

export default PaintingForm
