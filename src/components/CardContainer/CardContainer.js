import React from 'react';
import Card from '../Card/Card';
import CardCenterpiece from '../CardCenterpiece/CardCenterpiece';
import ErrorPage from '../Error/ErrorPage';
import Loading from '../Loading/Loading';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = ({data, selection, toggleFavorite, error, loading}) => {

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
    centerpiece = <CardCenterpiece selection={selection} />
  }

  return (
    <div className="card-container">
      {display}
      {centerpiece}
    </div>
  );
}

CardContainer.propTypes = {
  data: PropTypes.array.isRequired,
  selection:PropTypes.string.isRequired,
  toggleFavorites:PropTypes.func.isRequired,
  error:PropTypes.bool.isRequired,
  loading:PropTypes.bool.isRequired
}


export default CardContainer;
