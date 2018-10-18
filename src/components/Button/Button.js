import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({handleSelection, buttonName, currentSelection}) => {

  let buttonState;
  let buttonPath = `./${buttonName}.png`;

  if (currentSelection === buttonName) {
    buttonState = 'button-selected'
  } else {
    buttonState = ''
  }
  
  return(
    <div 
      className={`nav-button ${buttonState}`}
      onClick={() => {
        handleSelection(buttonName)
      }}
    >
      <h3 
        data-text={buttonName}
        className='nav-button-text'>{buttonName}
      </h3>
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  handleSelection: PropTypes.func.isRequired,
  currentSelection: PropTypes.string.isRequired
};

export default Button;