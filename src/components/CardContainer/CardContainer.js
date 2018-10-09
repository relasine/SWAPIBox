import React from 'react';
import Card from '../Card/Card'
import './CardContainer.css'

const CardContainer = (props) => {

  let cards;

  if (props.currenSelection === 'people') {
    cards = props.people.results.map( person => {
      return <Card data={person} key={person.name} />
    })
  } else if (props.currenSelection === 'vehicles') {
    cards = []
  } else if (props.currenSelection === 'planets') {
    cards = []
  }

  
  
  return (
    <div className="card-container">
      {cards}
    </div>
  );
}

export default CardContainer;