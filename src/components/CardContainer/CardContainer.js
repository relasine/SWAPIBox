import React from 'react';
import Card from '../Card/Card'
import './CardContainer.css'

const CardContainer = (props) => {

  console.log(props.data)

  const cards = props.data.map( point => {
    return  <Card 
      data={point} 
      key={point.name} 
      toggleFavorite={props.toggleFavorite} 
    />;
  }) 

  return (
    <div className="card-container">
      {cards}
    </div>
  );
}

export default CardContainer;