import React from 'react'

const Sushi = (props) => {
  // console.log('Sushi props', props);
  const handleClick = () => {
    props.onEatSushiClick(props.sushi.id)
  }

  return (
    <div className="sushi">
      <div
        className="plate"
        onClick={handleClick}
      >
        {
          /* Tell me if this sushi has been eaten! */
          props.sushi.eaten ?
            null
          :
            <img alt={props.sushi.name + " PA Rivers"} src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
