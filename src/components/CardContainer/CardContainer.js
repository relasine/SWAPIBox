import React from 'react';
import Card from '../Card/Card'
import './CardContainer.css'

const CardContainer = (props) => {

  let cards;

  if (props.selection === 'people') {
    cards = props.people.map( person => {
      return  <Card 
                data={person} 
                key={person.name} 
                toggleFavorite={props.toggleFavorite} 
              />
    });
  } else if (props.selection === 'vehicles') {
    cards = props.vehicles.map( vehicle => {
      return  <Card 
                data={vehicle} 
                key={vehicle.name} 
                toggleFavorite={props.toggleFavorite} 
              />
    })
  } else if (props.selection === 'planets') {
    cards = props.planets.map( planet => {
      return  <Card 
                data={planet} 
                key={planet.name} 
                toggleFavorite={props.toggleFavorite} 
              />
    });
  } else if (props.selection === 'favorites') {
    cards = props.favorites.map( favorite => {
      return  <Card 
                data={favorite} 
                key={favorite.name} 
                toggleFavorite={props.toggleFavorite} 
              />
    });
  }

  
  
  return (
    <div className="card-container">
      {cards}
    </div>
  );
}

export default CardContainer;