import React from 'react';
import PropTypes from 'prop-types';
import './ErrorPage.css';

const ErrorPage = ({ errorState }) => {
  return(
    <div 
      className={`error-page ${errorState}`}
      aria-label='error-page'
    >
      <h1 className="error">Connection lost...</h1>
    </div>
  );
}

ErrorPage.propTypes = {
  errorState: PropTypes.string.isRequired,
};

export default ErrorPage;