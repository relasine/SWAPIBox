import React from 'react';
import Card from '../Card/Card'
import './CardContainer.css'

const CardContainer = (props) => {

  const cards = props.data.results.map( point => {
    return <Card data={point} key={point.name} />
  })
  
  return (
    <div className="card-container">
      {cards}
      {cards}
      {cards}
      {cards}
      {cards}
      {cards}
    </div>
  );
}

export default CardContainer;