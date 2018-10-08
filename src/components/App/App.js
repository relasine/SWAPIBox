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
      totalFavorites: 0
    }
  }

  render() {
    return (
      <div className="App">
        <Crawl />
        <main>
          <Header totalFavorites={this.state.totalFavorites} />
          <section className='button-section'>
            <Button buttonName='people' />
            <Button buttonName='planets' />
            <Button buttonName='vehicles' />
          </section>
          <section className='main-content'>
            <h1 className='category'></h1>
            <CardContainer />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
