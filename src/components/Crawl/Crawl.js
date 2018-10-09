import React from 'react';
import './Crawl.css';
import PropTypes from 'prop-types';


const Crawl = ({film}) => {
  const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  return (
    <aside>
      <section className="crawl-container">
        <div className="crawl-header">
          <h1 className="crawl-episode">EPISODE {romanNumerals[film.episode_id -1]}</h1>
          <h1 className="crawl-title">{film.title}</h1>
        </div>
        <p className="crawl-text">{film.opening_crawl}</p>
        <p className="crawl-date">{film.release_date}</p>
      </section>
    </aside>
  );
}

Crawl.propTypes = {
  film: PropTypes.object.isRequired
};

export default Crawl;