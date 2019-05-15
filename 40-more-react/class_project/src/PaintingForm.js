import React from 'react'

class PaintingForm extends React.Component {
  state = {
    title: "",
    artistName: "",
    imageUrl: ""
  }

  // handleTitleChange = (e) => {
  //   this.setState({title: e.target.value})
  // }
  //
  // handleNameChange = (e) => {
  //   this.setState({this.state: e.target.value})
  // }

  handleChange = (e) => {
    // console.log(e.target.name);
    const field = e.target.name
    // this.setState({[field]: e.target.value})
    const value = e.target.value
    // event pooling
    // e.persist()

    this.setState(prevState => {
      return {
        [field]: value
      }
    })
  }


  render() {
    return (
      <form
        className="ui form"
        onSubmit={(e) => {
          e.preventDefault()
          this.props.handleSubmit(this.state)
          this.setState({title: "", artistName: "", imageUrl: ""})
        }}
      >
        <div className="field">
          <label>Title</label>
          <input placeholder="title" name="title" value={this.state.title} onChange={this.handleChange} type="text"/>
        </div>
        <div className="field">
          <label>Artist Name</label>
          <input name="artistName" value={this.state.artistName} onChange={this.handleChange} type="text" />
        </div>
        <div className="field">
          <label>Image URL</label>
          <input name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange} type="text" />
        </div>
        <button className="ui positive basic button">Add Painting</button>
      </form>
    )
  }
}

export default PaintingForm
