import React from 'react'
import PaintingCard from './PaintingCard'

const PaintingList = ({ paintings }) => {
  console.log('the props in PaintingList are', paintings);
  const paintingCards = paintings.map(painting => {
      return <PaintingCard painting={painting} key={painting.id} />
    })
  return (
    <div className="ui items">
      { paintingCards }
    </div>
  )
}

export default PaintingList
