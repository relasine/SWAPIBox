import React from 'react';
import Card from '../Card/Card';
import CardCenterpiece from '../CardCenterpiece/CardCenterpiece';
import ErrorPage from '../Error/ErrorPage';
import Loading from '../Loading/Loading';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = ({data, selection, toggleFavorite, error, loading, totalFavorites}) => {

  const cards = data.map( point => {
    return  <Card 
      data={point} 
      key={point.name} 
      toggleFavorite={toggleFavorite} 
    />;
  }) 

  let display;
  let centerpiece;

  if (error) {
    display = <ErrorPage />
  } else if (loading) {
    display = <Loading />
  } else {
    display = cards
    centerpiece = <CardCenterpiece selection={selection} totalFavorites={totalFavorites}/>
  }

  return (
    <div className="card-container" aria-label='card-container'>
      {display}
      {centerpiece}
    </div>
  );
}

CardContainer.propTypes = {
  data: PropTypes.array.isRequired,
  selection:PropTypes.string.isRequired,
  toggleFavorite:PropTypes.func.isRequired,
  error:PropTypes.bool.isRequired,
  loading:PropTypes.bool.isRequired,
  totalFavorites: PropTypes.number.isRequired
}


export default CardContainer;
