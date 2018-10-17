import React from 'react';
import './Card.css';
import Images from '../../images.js'

const Card = ( {data, toggleFavorite} ) => {
  let favoriteClass;

  if (data.favorite) {
    favoriteClass = 'favorited'
  } else {
    favoriteClass = ''
  }

  const stats = data.info.map((point) => {
    return <p key={Object.keys(point)[0]}>{Object.keys(point)[0]}: <span>{point[Object.keys( point)[0]]}</span></p>
  })

  return(
    <article className='card-wrapper'>
      <article className='figure'>
        <img
          className='card-image' 
          src={Images[data.name]}
          alt={data.name}
        />
        <section className='caption'>
          <div className='card-header'>
            <h2 className='card-title'>{data.name}</h2>
            <div className='favorite-icon'></div>
          </div>
          <div className='card-content'>
            {stats}
            <div className='icon-wrapper' onClick={()=>{toggleFavorite(data)}}>
              <i className={`fab fa-jedi-order favorite-icon ${favoriteClass}`}></i>
            </div>
          </div>
        </section>
      </article>
    </article>
  )
}

export default Card;

