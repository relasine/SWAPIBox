import React from 'react';
import PropTypes from 'prop-types';
import './Briefing.css';

const Briefing = ( {crawl, title, id}) => {
  return (
    <section aria-label='mission-briefing'>
      <h2>Situation Briefing</h2>
      <p className='crawl-text'>{crawl}</p>
      <p className='smol-text'>Briefing Title: <span>{title}</span></p>
      <p className='smol-text'>Galaxy Date: <span>{id}</span></p>
    </section>
  );
}

Briefing.propTypes = {
  crawl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Briefing;