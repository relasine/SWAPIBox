import React from 'react';
import './CardCenterpiece.css';
import PropTypes from'prop-types';

const CardCenterpiece = ({selection, totalFavorites}) => {
  let centerText;

  if (selection === 'people'){
    centerText = 'Persons of Interest';
  } else if (selection === 'planets') {
    centerText = 'Locations of Interest';
  } else if (selection === 'vehicles') {
    centerText = 'Available Conveyance';
  } else if (selection === 'saved') {
    centerText = 'Saved items';
  } else {
    centerText = '';
  }

  let favText;

  if (selection === 'saved'){
    favText = 'tap to remove data';
  } else {
    favText = 'tap to save data';
  }


  return(
    <div 
      className="card-centerpiece"
      aria-label='section-label'
    >
      <div className='fav-total-wrapper'>
        <i 
          className="fas fa-journal-whills total-fav-icon"
          aria-label='saved-items-icon'
        ></i>
        <h4 
          className='fav-count-display'
          aria-label='saved-items-count'
        >{totalFavorites}</h4>
      </div>
      <i 
        className='fab fa-jedi-order centerpiece-icon'
        aria-label='jedi-order-icon'
      ></i>
      <h3 className='centerpiece-text'>{centerText}</h3>
      <p className='centerpiece-fav-text'>{favText}</p>
    </div>
  )
}

export default CardCenterpiece;

CardCenterpiece.propTypes = {
  selection: PropTypes.string.isRequired,
  totalFavorites: PropTypes.number.isRequired
};