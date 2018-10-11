import React from 'react';
import FetchPeople from './fetchPeople';
 
describe('fetchPeople', async () => {

  let fetchPeople;

  const mockResponse = {
    results: [
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
  }

  const mockHomeResponse = [
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

  const mockMappedResponse = [
    {
      name: 'Fred',
      homeworld: 'Earth',
      language: 'English',
      species: 'Human',
      population: '7.3bill',
    },
    { 
      name: 'George',
      homeworld: 'Earth',
      language: 'Spanish',
      species: 'Human',
      population: '7.3bill',
    }
  ]

  const mockFetchCall = jest.fn(() => {
    return mockResponse;
  });

  beforeEach(() => {
    fetchPeople = new FetchPeople
    fetchPeople.fetchCall = mockFetchCall
  })

  it('calls fetchCall', () => {


    fetchPeople.fetchPeople();

    expect(mockFetchCall).toHaveBeenCalled();
  });

  it('calls fetchHomeWorld', async () => {
    fetchPeople.fetchHomeWorld = jest.fn(() => {
      return mockHomeResponse;
    });

    await fetchPeople.fetchPeople();

    expect(fetchPeople.fetchHomeWorld).toHaveBeenCalled();
  });

  it('calls fetchSpecies', async () => {
    fetchPeople.fetchSpecies = jest.fn(() => {
      return mockHomeResponse;
    });

    await fetchPeople.fetchPeople();

    expect(fetchPeople.fetchSpecies).toHaveBeenCalled();
  })

  it('calls cleanPeople', async () => {
    fetchPeople.cleanPeople = jest.fn()

    await fetchPeople.fetchPeople();

    expect(fetchPeople.cleanPeople).toHaveBeenCalled();
  })

});



describe('cleanPeople', () => {

  let fetchPeople; 

  const mockHomeResponse = [
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

  const mockMappedResponse = [
    {
      name: 'Fred',
      info: [
        {homeworld: 'Earth'},
        {language: 'English'},
        {species: 'Human'},
        {population: '7.3bill'},
      ]
    },
    { 
      name: 'George',
      info: [
        {homeworld: 'Earth'},
        {language: 'Spanish'},
        {species: 'Human'},
        {population: '7.3bill'},
      ]
    }
  ]

  const mockFetchCall = jest.fn(() => {
    return mockResponse;
  });

  beforeEach(() => {
    fetchPeople = new FetchPeople
    fetchPeople.fetchCall = mockFetchCall
  });

  it('should remove unwanted info', () => {
    const response = fetchPeople.cleanPeople(mockHomeResponse);

    expect(response).toEqual(mockMappedResponse);
  })

});

describe('fetchHomeWorld', async () => {

});

describe('fetchSpecies', async () => {

});