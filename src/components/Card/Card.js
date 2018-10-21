import React from 'react';
import PropTypes from 'prop-types'
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
    <article 
      aria-label='item-profile-card'
      className={`card-wrapper`}
      onClick={()=>{toggleFavorite(data)}}
    >
      <article 
        className='figure' 
        aria-lable-'card-front'
      >
        <div className='marked-icon-wrapper'>
          <div className='favorite-count-wrapper'>
            <i className={`fas fa-journal-whills ${favoriteClass}`}></i>
          </div>
        </div>
        <img
          className='card-image' 
          src={Images[data.name]}
          alt={data.name}
        />
        <section 
          className={`caption ${favoriteClass}`} 
          aria-label='card-back'
        >
          <div className='card-header'>
            <h2 className='card-title'>{data.name}</h2>
            <div className='favorite-icon'></div>
          </div>
          <div className='card-content'>
            {stats}
            <div className='icon-wrapper' >
              <i className={'fab fa-jedi-order favorite-icon'}></i>
            </div>
          </div>
        </section>
      </article>
    </article>
  )
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  toggleFavorite: PropTypes.func.isRequired
}

export default Card;

