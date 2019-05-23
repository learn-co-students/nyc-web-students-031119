import React from 'react';
import { Link } from 'react-router-dom'

class PaintingShow extends React.Component {
  state = {painting: null}

  componentDidMount() {
    fetch(`http://localhost:3001/api/v1/paintings/${this.props.slug}`)
    .then(res => res.json())
    .then((painting) => this.setState({painting}))
  }

  render() {
    const { painting } = this.state
    if (painting) {
      return (
        <div>
          <div className="ui card">
            <div className="image">
              <img src={painting.image} alt={painting.slug} />
            </div>
            <div className="content">
              <div className="header">{painting.title}</div>
              <div className="meta">{painting.date}</div>
              <div className="meta">
                {painting.dimensions.width} in. x {painting.dimensions.height} in.
              </div>
              <div className="description">
                by {painting.artist.name}
                <p>
                  {painting.artist.birthday} - {painting.artist.deathday}
                </p>
                <p>{painting.artist.hometown}</p>
              </div>
            </div>
            <div className="extra content">{painting.museum.name}</div>
          </div>
            <i className="left arrow icon" />
            <Link to="/paintings">
              Back
            </Link>
        </div>
      )
    } else {
      return null
    }
  }
};

export default PaintingShow;
