import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';


const Button = (props) => {
  return(
    <div className='nav-button'>
      <h3>{props.buttonName}</h3>
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired
};

export default Button;