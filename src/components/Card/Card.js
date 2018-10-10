import React from 'react';
import './Card.css';

const Card = ( {data} ) => {

  const stats = data.info.map((point) => {
    return <p>{Object.keys(point)[0]}: <span>{point[Object.keys( point)[0]]}</span></p>
  })

  return (
    <article>
      <div className='card-header'>
        <h2>{data.name}</h2>
        <div className='favorite-toggle'></div>
      </div>
      {stats}
    </article>
  );
}

export default Card;