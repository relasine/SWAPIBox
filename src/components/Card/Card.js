import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <article>
      <div className='card-header'>
        <h2>{props.data.name}</h2>
        <div className='favorite-toggle'></div>
      </div>
      <p>{Object.keys(props.data)[1]}: <span>{props.data[Object.keys(props.data)[1]]}</span></p>
      <p>{Object.keys(props.data)[2]}: <span>{props.data[Object.keys(props.data)[2]]}</span></p>
      <p>{Object.keys(props.data)[3]}: <span>{props.data[Object.keys(props.data)[3]]}</span></p>
      <p>{Object.keys(props.data)[4]}: <span>{props.data[Object.keys(props.data)[4]]}</span></p>
    </article>
  );
}

export default Card;