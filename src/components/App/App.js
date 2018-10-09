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
      currentSelection: 'people',
      openingCrawl: {}
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
    console.log(currentSelection)
    this.setState({
      currentSelection
    });
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
              <CardContainer data={mockPeople}/>
            </section>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
