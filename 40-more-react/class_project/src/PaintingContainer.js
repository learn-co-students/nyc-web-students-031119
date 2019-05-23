import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PaintingList from './PaintingList'
import PaintingForm from './PaintingForm'
import PaintingShow from './PaintingShow'

class PaintingContainer extends React.Component {
  state = {
    paintings: []
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/paintings")
    .then(res => res.json())
    .then(data => {
      this.setState({paintings: data.sort((a, b) => b.votes - a.votes)})
    })
  }

  handleVoteClick = (id) => {
    console.log('the click happened', id)

    this.setState((prevState) => {
      return {
          paintings: prevState.paintings.map(pntg => {
          if(pntg.id === id) {
            return {...pntg, votes: pntg.votes + 1}
          } else {
            return pntg
          }
        }).sort((a,b) => b.votes - a.votes)
      }
    })

  }

  handleSubmit = (painting) => {
    const newPainting = {
      image: painting.imageUrl,
      artist: {name: painting.artistName },
      title: painting.title,
      votes: 2003,
      id: painting.imageUrl
    }
    // console.log(newPainting);

    this.setState(prevState => {
      return {
        paintings: [
          newPainting,
          ...prevState.paintings
        ]
      }
    })

    this.props.history.push("/paintings")
  }

  handleDeleteClick = (id) => {
    this.setState(prevState => {
      return {
        paintings: prevState.paintings.filter(p => p.id !== id)
      }
    })
  }

  render() {
    console.log('painting container is rendering', this.props);
    return (
      <Switch>
        <Route path="/paintings/new" render={() => {
          return <PaintingForm handleSubmit={this.handleSubmit} />
        }} />
        <Route path="/paintings/:slug" render={(routerProps) => {
          const slug = routerProps.match.params.slug
          // const painting = this.state.paintings.find(p => p.slug === slug)

          return <PaintingShow slug={slug} />
        }} />
        <Route path="/paintings" render={() => {
          return (
            <PaintingList
              handleVoteClick={this.handleVoteClick}
              handleDeleteClick={this.handleDeleteClick}
              paintings={this.state.paintings}
            />
          )
        }} />
      </Switch>
    )
    // switch (this.props.page) {
    //   case "all":
    //     return (
          // <PaintingList
          //   handleVoteClick={this.handleVoteClick}
          //   handleDeleteClick={this.handleDeleteClick}
          //   paintings={this.state.paintings}
          // />
    //     )
    //   case "add":
        // return <PaintingForm handleSubmit={this.handleSubmit} />
    //   default:
    //    return null
    // }
  }

}

export default PaintingContainer
