import React from 'react';
import './Card.css';
import Images from '../../images.js'

const Card = ( {data, toggleFavorite} ) => {
  let favoriteClass;

  if (data.favorite) {
    favoriteClass = 'favorite-toggle favorited'
  } else {
    favoriteClass = 'favorite-toggle'
  }

  const stats = data.info.map((point) => {
    return <p key={Object.keys(point)[0]}>{Object.keys(point)[0]}: <span>{point[Object.keys( point)[0]]}</span></p>
  })

  return (
    <article className="card">
      <section className="front">
        <img className='portrait' src={Images[data.name]} alt={data.name} />
      </section>
      <section className="back">
        <div className='card-header'>
          <h2>{data.name}</h2>
          <div 
            className={favoriteClass} 
            onClick={() => { 
              toggleFavorite(data) 
            }}
          > </div>
        </div>
        <div className="card-stats">
          {stats}
        </div>
      </section>
    </article>
  );
}

export default Card;