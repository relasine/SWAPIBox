import React from 'react';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ModalButtons.css';

const ModalButtons = ({ currentSelection, handleSelection, hamburger }) => {

  return(
    <aside 
      className={`modal-buttons-wrapper ${hamburger.status}`}
      aria-label='mobile-navigation-section'
    >
      <NavLink 
        to='/people' 
        className='nav-button people' 
      >
        <Button 
          currentSelection={currentSelection}
          buttonName='people'
          handleSelection={handleSelection}
        />
      </NavLink>
      <NavLink 
        to='/planets' 
        className='nav-button planets' 
      >
        <Button 
          currentSelection={currentSelection}
          buttonName='planets'
          handleSelection={handleSelection}
        />
      </NavLink>
      <NavLink 
        to='/vehicles' 
        className='nav-button vehicles' 
      >
        <Button 
          currentSelection={currentSelection}
          buttonName='vehicles'
          handleSelection={handleSelection}
        />
      </NavLink>
      <NavLink 
        to='/favorites' 
        className='nav-button favorites' 
      >
        <Button 
          currentSelection={currentSelection}
          buttonName='saved'
          handleSelection={handleSelection}
        />
      </NavLink>
    </aside>
  );
}

ModalButtons.propTypes = {
  currentSelection: PropTypes.string.isRequired,
  handleSelection: PropTypes.func.isRequired,
  hamburger: PropTypes.object.isRequired,
};

export default ModalButtons;