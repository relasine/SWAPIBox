import React, { Component } from 'react';
import './App.css';
import Crawl from '../Crawl/Crawl';
import Header from '../Header/Header';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';
import fetchCall from '../../helpers/fetchCalls';
import Vehicles from '../../helpers/Vehicles';
import Planets from '../../helpers/Planets';
import People from '../../helpers/People';
import { Route, NavLink } from 'react-router-dom';
import NavBar from './NavBar';
import Error from './Error';


class App extends Component {
  constructor() {
    super()

    this.state = {
      currentSelection: '',
      openingCrawl: {},
      people: [],
      vehicles: [],
      planets: [],
      error: false,
      loading: true,
      fetchCall: fetchCall,
      fetchVehicles: new Vehicles(),
      fetchPeople: new People(),
      fetchPlanets: new Planets(),
      favorites: JSON.parse(localStorage.getItem('favorites')) || []
    };
  }

  componentDidMount() {
    this.crawlCall();
  }

  crawlCall = () => {
    if (localStorage.films) {
      this.getFilms();
    } else {
      this.fetchFilms();
    }
  }

  getFilms = () => {
    const films = JSON.parse(localStorage.getItem('films'));
    const randomNum = Math.floor(Math.random() * (films.count));
    this.setState({
      openingCrawl: films.results[randomNum], 
      loading: false,
      error: false
    })
  }

  fetchFilms = async () => {
    const url = 'https://swapi.co/api/films/';
    try {
      const films = await this.state.fetchCall(url);

      const randomNum = Math.floor(Math.random() * (films.count))
      this.setState({
        openingCrawl: films.results[randomNum], 
        loading: false,
        error: false
      })
      localStorage.setItem('films', JSON.stringify(films))
    } catch(error) {
      this.setState({ 
        error: true, 
        currentSelection: '' 
      })
    }
  }

  toggleFavorite = (cardData) => {
      this.toggleFavoriteInDatabase(cardData);
      
    if(this.state.favorites.find( fav => cardData.name === fav.name)){
      this.removeFavorite(cardData)


    } else {
      cardData.favorite = true;
      // console.log(cardData.favorite)
      const newFavorites = [...this.state.favorites, cardData]
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      this.setState({
        favorites: newFavorites,
        planets: JSON.parse(localStorage.getItem('planets')) || [],
        vehicles: JSON.parse(localStorage.getItem('vehicles')) || [],
        people: JSON.parse(localStorage.getItem('people')) || []
      })
    }
  }

  toggleFavoriteInDatabase = (cardData) => {
    const library = JSON.parse(localStorage.getItem(cardData.category))
    const target = library.find( card => cardData.name === card.name);
    target.favorite = !target.favorite;
    localStorage.setItem(cardData.category, JSON.stringify(library));
  }

  removeFavorite = (cardData) => {
    const updatedFavorites = this.state.favorites.filter( fav => fav.name !== cardData.name)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    this.setState({
      favorites: updatedFavorites,
      planets: JSON.parse(localStorage.getItem('planets')) || [],
      vehicles: JSON.parse(localStorage.getItem('vehicles')) || [],
      people: JSON.parse(localStorage.getItem('people')) || []
    })
  }
 
  handleSelection = (currentSelection) => {
    if (currentSelection === 'people') {
      this.callFetchPeople();
    } else if (currentSelection === 'vehicles') {
      this.callFetchVehicles();
    } else if (currentSelection === 'planets') {
      this.callFetchPlanets()
    } else {
      this.setState({
        currentSelection: 'favorites',
        loading: false,
        error: false
      })
    }
  }

  callFetchVehicles = () => {
    if(localStorage.vehicles){
      this.pullVehicleData();
    } else {
      this.fetchVehicleData();
    }
  }

  pullVehicleData = () => {
    const response = localStorage.getItem('vehicles')
    const vehicles = JSON.parse(response)
    this.setState({
      vehicles: vehicles,
      currentSelection: 'vehicles',
      loading: false,
      error: false
    })    
  }

  fetchVehicleData = async() => {
    await this.setState({ loading: true })

    try {
      const cleanData = await this.state.fetchVehicles.fetchVehicles()
      this.setState({
        vehicles: cleanData,
        currentSelection: 'vehicles',
        loading: false,
        error: false
      })
      localStorage.setItem('vehicles', JSON.stringify(cleanData))
    } catch(error) {
      this.setState({ error: true, currentSelection: '' })
    }
  }

  callFetchPeople = () => {
    if (localStorage.people) {
      this.pullPeopleData();
    } else {
      this.fetchPeopleData();
    }
  }

  pullPeopleData = () => {
    const response = localStorage.getItem('people')
      const people = JSON.parse(response)
      this.setState({
        people: people,
        currentSelection: 'people',
        loading: false,
        error: false
    })
  }

  fetchPeopleData = async () => {
    await this.setState({ loading: true })

    try {
      const cleanedPeople = await this.state.fetchPeople.fetchPeople();
      this.setState({
        people: cleanedPeople,
        currentSelection: 'people',
        loading: false,
        error: false
      })
      localStorage.setItem('people', JSON.stringify(cleanedPeople))
    } catch(error) {
      this.setState({ error: true, currentSelection: '' })
    }
  }

  callFetchPlanets = () => {
    if (localStorage.planets){
      this.pullPlanetData()
    } else {
      this.fetchPlanetData()
    }
  }

  fetchPlanetData = async () => {
    await this.setState({ loading: true })
    try{
      const cleanedPlanets = await this.state.fetchPlanets.fetchPlanets()
      this.setState({
        planets: cleanedPlanets,
        currentSelection: 'planets',
        loading: false,
        error: false
      })
      localStorage.setItem('planets', JSON.stringify(cleanedPlanets))
    } catch(error) {
      this.setState({ error: true })
    }
  }

  pullPlanetData = () => {
    const response = localStorage.getItem('planets')
    const planets = JSON.parse(response)
    this.setState({
      planets: planets,
      currentSelection: 'planets',
      loading: false,
      error: false
    })
  }

  render() {
    if( this.state.error ){
      return(
        <div className="App">Error</div>
      )
    } else if (this.state.loading) { 
      return(
        <div className="App">Loading</div>
      )
    } else {
      return (
        <div className="App">
          <Route path='/' render={() => <Crawl film={this.state.openingCrawl} />}    
          <main>
            <Header totalFavorites={this.state.favorites.length} />
            <section className="content-wrapper">
              <section className='button-section'>
                <Button 
                  currentSelection={this.state.currentSelection}
                  handleSelection={this.handleSelection} 
                  buttonName='people' 
                />
                <Button 
                  currentSelection={this.state.currentSelection}
                  handleSelection={this.handleSelection} 
                  buttonName='planets' 
                />              
                <Button 
                  currentSelection={this.state.currentSelection}
                  handleSelection={this.handleSelection} 
                  buttonName='vehicles' 
                />
                <Button 
                  currentSelection={this.state.currentSelection}
                  handleSelection={this.handleSelection} 
                  buttonName='favorites' 
                />
              </section>
              <section className='main-content'>
                <h1 className='category'>{this.state.currentSelection}</h1>
                <CardContainer 
                  people={this.state.people}
                  planets={this.state.planets}
                  vehicles={this.state.vehicles}
                  selection={this.state.currentSelection}
                  toggleFavorite={this.toggleFavorite}
                  favorites={this.state.favorites}
                />
              </section>
            </section>
          </main>
        </div>
      );
    }
  }
}

export default App;


Render() {
  return (
      <div>
        <Route path='/' render={() => (
          <NavBar currentSelection={this.state.currentSelection} handleSelection={this.handleSelection} />
        )} />

        <Switch>
          <Route exact path='/' render={() => (
            <Crawl film={this.state.openingCrawl} />
          )} />

          <Route exact path='/people' render={() => (
            <CardContainer 
              data={this.state.people} 
              selection={this.state.currentSelection}
              toggleFavorite={this.toggleFavorite}
            />
          )} />

          <Route exact path='/planets' render={() => (
            <CardContainer 
              data={this.state.planets} 
              selection={this.state.currentSelection}
              toggleFavorite={this.toggleFavorite}
            />
          )} />

          <Route exact path='/vehicles' render={() => (
            <CardContainer 
              data={this.state.vehicles} 
              selection={this.state.currentSelection}
              toggleFavorite={this.toggleFavorite}
            />
          )} />

          <Route exact path='/people' render={() => (
            <CardContainer 
              data={this.state.favorites} 
              selection={this.state.currentSelection}
              toggleFavorite={this.toggleFavorite}
            />
          )} />

          <Route path='/error' component={Error} />
          <Route component={404} />
        </Switch>
      </div>
  )
}
