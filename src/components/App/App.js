import React, { Component } from 'react';
import './App.css';
import Crawl from '../Crawl/Crawl';
import Header from '../Header/Header';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';


class App extends Component {
  constructor() {
    super()

    this.state = {
      totalFavorites: 0,
      currentSelection: '',
      openingCrawl: {},
      people: [],
      vehicles: [],
      planets: []
    };
  }

  componentDidMount() {
    this.crawlCall();
  }

  crawlCall = async () => {
    const url = 'https://swapi.co/api/films/';
    const response = await fetch(url);
    const data = await response.json();
    const randomNum = Math.floor(Math.random() * (data.count))
    this.setState({openingCrawl: data.results[randomNum]})
  }

  handleSelection = (currentSelection) => {

    if (currentSelection === 'people') {
      this.fetchPeople()
    } else if (currentSelection === 'vehicles') {
      this.fetchVehicles();
    } else if (currentSelection === 'planets') {
      this.fetchPlanets()
    }
  }

  fetchVehicles = async () => {
    const data = await this.fetchCall('vehicles')
    const cleanData = data.results.map((vehicle) => {
      let vehicleObject = {
        name: vehicle.name,
        info: [
          {model: vehicle.model},
          {class: vehicle.vehicle_class},
          {passengers: vehicle.passengers}
        ]
      }
      return vehicleObject;
    })
    this.setState({
      vehicles: cleanData,
      currentSelection: 'vehicles'
    })
  }

  fetchPeople = async () => {
    const data = await this.fetchCall('people')
    const withHomeWorld = await this.fetchHomeWorld(data.results);
    const withSpecies = await this.fetchSpecies(withHomeWorld);
    const cleanedPeople = withSpecies.map((person) => {
      let personObject = {
        name: person.name,
        info: [
          {homeworld: person.homeworld},
          {language: person.language},
          {species: person.species},
          {population: person.population}
        ]
      } 
      return personObject;
    });

    this.setState({
      people: cleanedPeople,
      currentSelection: 'people'
    })
  }

  fetchHomeWorld = async (people) => {
    const withHomeWorld = people.map(async (person) => {
      const url = person.homeworld;
      const response = await fetch(url);
      const data = await response.json();
      person.homeworld = data.name;
      person.population = data.population;
      return person;
    });

    return Promise.all(withHomeWorld);
  }

  fetchSpecies = async (people) => {
    const withSpecies = people.map(async (person) =>  {
      const url = person.species;
      const response = await fetch(url);
      const data = await response.json();
      person.species = data.name;
      person.language = data.language;
      return person;
    });

    return Promise.all(withSpecies)
  }

  fetchPlanets = async () => {
    const data = await this.fetchCall('planets');
    const withResidents = await this.fetchResidents(data.results);

    const cleanedPlanets = withResidents.map((planet) => {
      // planet.residents = planet.residents.join()
// debugger
      let planetObject = {
        name: planet.name,
        info: [
          {terrain: planet.terrain},
          {population: planet.population},
          {climate: planet.climate},
          {residents: (...(planet.residents))}
        ]
      }
      return planetObject
    });

    this.setState({
      planets: cleanedPlanets,
      currentSelection: 'planets'
    })
  }

  fetchResidents = async (planets) => {
    const withResidents = planets.map(async (planet) => {
      let residents = [];
      const planetResidents = planet.residents.map( async (resident) => {
        const url = resident
        const response = await fetch(url);
        const data = await response.json();
        residents.push(data.name)
        return residents
      })
      planet.residents = residents
      return planet
    })
    return Promise.all(withResidents)
  }

  fetchCall = async (selection) => {
    const url = `https://swapi.co/api/${selection}/`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  render() {
    const mockPeople = {results: 
      [ 
        {
          name: 'bob',
          homeworld: {name: 'earth', population: '7.5billion'},
          species: {name: 'human', language: 'english'}
        }
      ]
    }

    return (
      <div className="App">
        <Crawl film={this.state.openingCrawl}/>
        <main>
          <Header totalFavorites={this.state.totalFavorites} />
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
              />              <Button 
                currentSelection={this.state.currentSelection}
                handleSelection={this.handleSelection} 
                buttonName='vehicles' 
              />
            </section>
            <section className='main-content'>
              <h1 className='category'>{this.state.currentSelection}</h1>
              <CardContainer 
                data={mockPeople}
                people={this.state.people}
                planets={this.state.planets}
                vehicles={this.state.vehicles}
                selection={this.state.currentSelection}
              />
            </section>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
