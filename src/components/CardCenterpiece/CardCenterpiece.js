import React from 'react';
import './CardCenterpiece.css';
import PropTypes from'prop-types';

const CardCenterpiece = ({selection}) => {
  let centerText;

  if (selection === 'people'){
    centerText = 'Persons of Interest'
  } else if (selection === 'planets') {
    centerText = 'Locations of Interest'
  } else if (selection === 'vehicles') {
    centerText = 'Available Conveyance'
  } else if (selection === 'favorites') {
    centerText = 'Saved items'
  } else (centerText = '')

  let favText;

  if (selection === 'favorites'){
    favText = 'tap to remove data'
  } else {
    favText = 'tap to save data'
  }


  return(
    <div className="card-centerpiece">
      <i className='fab fa-jedi-order centerpiece-icon'></i>
      <h3 className='centerpiece-text'>{centerText}</h3>
      <p className='centerpiece-fav-text'>{favText}</p>
    </div>
  )
}

export default CardCenterpiece

CardCenterpiece.propTypes = {
  selection: PropTypes.string.isRequired
};