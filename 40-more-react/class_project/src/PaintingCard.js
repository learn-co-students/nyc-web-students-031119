import React from 'react'

const PaintingCard = (props) => {
  // console.log('PaintingCard props', props.painting);
  return (
    <div className="item">
      <div className="ui small image">
        <img src={props.painting.image} alt={props.painting.slug}/>
      </div>
      <div className="middle aligned content">
        <div className="header">{props.painting.title} by {props.painting.artist.name}</div>
        <div className="description">
          <a href="/">
            <i className="large caret up icon" />
            {props.painting.votes} votes
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaintingCard
