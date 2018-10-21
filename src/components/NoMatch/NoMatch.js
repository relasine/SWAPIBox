import React from 'react';

import './NoMatch.css';

const NoMatch = ({ location }) => {
  return(
    <section className='no-match' aria-label='404-error'>
      <h3 className='bad-path-message'>There is no entry within the archives for {location.pathname}</h3>
    </section>
  );
} 

export default NoMatch;