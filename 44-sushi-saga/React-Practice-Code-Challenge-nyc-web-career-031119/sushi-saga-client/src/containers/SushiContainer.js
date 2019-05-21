import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const displayedSushis =  props.sushis.map(sushi => {
    return <Sushi sushi={sushi} key={sushi.id} onEatSushiClick={props.onEatSushiClick} />
  })

  return (
    <Fragment>
      <div className="belt">
        {
           displayedSushis
        }
        <MoreButton onMoreSushiClick={props.onMoreSushiClick} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
