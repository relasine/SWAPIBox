import React from 'react';
import Card from '../Card/Card'
import ErrorPage from '../Error/ErrorPage';
import Loading from '../Loading/Loading';
import './CardContainer.css'

const CardContainer = ({data, selection, toggleFavorite, error, loading}) => {

  const cards = data.map( point => {
    return  <Card 
      data={point} 
      key={point.name} 
      toggleFavorite={toggleFavorite} 
    />;
  }) 

  let display;

  if (error) {
    display = <ErrorPage />
  } else if (loading) {
    display = <Loading />
  } else {
    display = cards
  }

  console.log(error)



  return (
    <div className="card-container">
      {display}
    </div>
  );
}

export default CardContainer;
