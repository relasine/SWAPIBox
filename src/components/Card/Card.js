import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <article>
      <div className='card-header'>
        <h2>{props.data.name}</h2>
        <div className='favorite-toggle'></div>
      </div>
      <p>{Object.keys(props.data)[1]}: <span>{props.data.homeworld.name}</span></p>
      <p>{Object.keys(props.data)[2]}: <span>{props.data.species.name}</span></p>
      <p>language: <span>{props.data.species.language}</span></p>
      <p>population: <span>{props.data.homeworld.population}</span></p>
    </article>
  );
}

export default Card;