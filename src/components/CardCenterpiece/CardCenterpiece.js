import React from 'react';
import './CardCenterpiece.css';
import PropTypes from'prop-types';

const CardCenterpiece = ({selection}) => {
  let centertext;

  if (selection === 'people'){
    centertext = 'Persons of Interest'
  } else if (selection === 'planets') {
    centertext = 'Locations of Interest'
  } else if (selection === 'vehicles') {
    centertext = 'Available Conveyance'
  } else if (selection === 'favorites') {
    centertext = 'Saved items'
  } 

  return(
    <div className="card-centerpiece">
      <i className='fab fa-jedi-order centerpiece-icon'></i>
      <h3 className='centerpiece-text'>{centertext}</h3>
    </div>
  )
}

export default CardCenterpiece