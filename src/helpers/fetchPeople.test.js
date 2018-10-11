import React from 'react';
import fetchPeople from './fetchPeople';
 
describe('fetchPeople', async () => {

  const fetchCall = () => {
    const response = [
      {
        name: 'Fred',
        homeworld: 'Earth',
        language: 'English',
        species: 'Human',
        population: '7.3bill',
        favoriteFood: 'Mac and Cheese'
      },
      { 
        name: 'George',
        homeworld: 'Earth',
        language: 'Spanish',
        species: 'Human',
        population: '7.3bill',
        favoriteFood: 'Hamburgers'
      }
    ]

    return response;
  }

  const mockFetchCall = jest.fn()

  it('calls fetchCall', async () => {
    // const response = await fetchPeople();

  });
});

describe('cleanPeople', () => {

});

describe('fetchHomeWorld', async () => {

});

describe('fetchSpecies', async () => {

});