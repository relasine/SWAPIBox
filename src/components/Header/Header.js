import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <header>
    <div className='favorites'>
      <h3>Favorites</h3>
      <div className='favorites-box'>
        <p>{props.totalFavorites}</p>
      </div>
    </div>
    </header>
  );
}

Header.propTypes = {
  // totalFavorites: PropTypes.number.isRequired
};

export default Header;