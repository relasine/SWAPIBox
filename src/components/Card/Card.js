import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <article>
      <h2>{props.data.name}</h2>
      <img src="" alt=""/>
      <p>{Object.keys(props.data)[1]} <span>{props.data.homeworld.name}</span></p>
      <p>{Object.keys(props.data)[2]} <span>{props.data.species.name}</span></p>
      <p>{Object.keys(props.data)[3]} <span>{props.data.species.language}</span></p>
      <p>{Object.keys(props.data)[4]} <span>{props.data.homeworld.population}</span></p>
    </article>
  );
}

export default Card;