import React from 'react';
import './Crawl.css';
import PropTypes from 'prop-types';


const Crawl = ({film}) => {
  return (
    <aside>
      <h1 className="crawl-title">{film.title}</h1>
      <p className="crawl-text">{film.opening_crawl}</p>
      <p className="crawl-date">{film.release_date}</p>
    </aside>
  );
}

Crawl.propTypes = {
  film: PropTypes.object.isRequired
};

export default Crawl;