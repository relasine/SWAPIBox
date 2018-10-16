import React from 'react';
import Card from '../Card/Card'
import { Route } from 'react-router-dom';
import ErrorPage from '../Error/ErrorPage';
import Loading from '../Loading/Loading';
import './CardContainer.css'

const CardContainer = ({data, selection, toggleFavorite, error, loading}) => {

  console.log(data)

  if(loading){
    return(
      <Route path='/loading' component={Loading} />
    )
  } else if(error){
    return(
      <Route path='/error' component={ErrorPage} />
    )
  } else {
    const cards = data.map( point => {
      return  <Card 
        data={point} 
        key={point.name} 
        toggleFavorite={toggleFavorite} 
      />;
    }) 

    return (
      <div className="card-container">
        {cards}
      </div>
    );
  }

}

export default CardContainer;
