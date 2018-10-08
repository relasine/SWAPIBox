import React, { Component } from 'react';
import './App.css';
import Crawl from '../Crawl/Crawl';
import Header from '../Header/Header';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';


class App extends Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <Crawl />
        <main>
          <Header />
          <div className='content'>
            <section className='button-section'>
              <Button />
              <Button />
              <Button />
            </section>
            <section className='main-content'>
              <h1 className='category'></h1>
              <CardContainer />
            </section>
          </div>
        </main>

      </div>
    );
  }
}

export default App;
