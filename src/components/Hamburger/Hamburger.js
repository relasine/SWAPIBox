import React from 'react';
import PropTypes from 'prop-types';
import './Hamburger.css';

const Hamburger = ({ hamburgerChange, status }) => {
  return(
    <section 
      className='lightsaburger'
      onClick={() => {
        hamburgerChange();
      }}
      aria-label='menu-button'
    >
      <div className={`top ${status.topToggled}`}>
       <div className={`top-blade blade ${status.topBladeToggled}`}></div>
       <div className={`top-grip grip ${status.gripToggled}`}></div>
      </div>
      <div className={`middle ${status.middleToggled}`}>
        <div className={`middle-grip grip ${status.gripToggled}`}></div>
        <div className={`middle-blade blade ${status.middleBladeToggled}`}></div>
      </div>
      <div className={`bottom ${status.bottomToggled}`}>
       <div className={`bottom-blade blade ${status.bottomBladeToggled}`}></div>
       <div className={`bottom-grip grip ${status.gripToggled}`}></div>
      </div>

    </section>
  );
}

Hamburger.propTypes = {
  status: PropTypes.object.isRequired,
  hamburgerChange: PropTypes.func.isRequired,
};

export default Hamburger;