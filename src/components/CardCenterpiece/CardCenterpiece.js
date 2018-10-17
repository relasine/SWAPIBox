import React from 'react';
import './CardCenterpiece.css';
import PropTypes from'prop-types';

const CardCenterpiece = ({selection}) => {
  let centerpiece;

  // if (selection === 'people'){
  //   centerpiece = <div>People</div>
  // } else if (selection === 'planets') {
  //   centerpiece = <p>planets</p>
  // } else if (selection === 'vehicles') {
  //   centerpiece = <p>vehicles</p>
  // } else if (selection === 'favorites') {
  //   centerpiece = <p>favorites</p>
  // } 
      // {centerpiece}

  return(
    <div className="card-centerpiece">
      <i className='fab fa-jedi-order centerpiece-icon'></i>
      <h3 className='centerpiece-text'>Persons of Interest</h3>
    </div>
  )
}

export default CardCenterpiece