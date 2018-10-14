import React from 'react';
import People from './People';
 
describe('People', async () => {

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
    fetchPeople = new People
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
      ],
      favorite: false,
      category: 'people'
    },
    { 
      name: 'George',
      info: [
        {homeworld: 'Earth'},
        {language: 'Spanish'},
        {species: 'Human'},
        {population: '7.3bill'},
      ],
      favorite: false,
      category: 'people'
    }
  ]

  const mockFetchCall = jest.fn(() => {
    return mockResponse;
  });

  beforeEach(() => {
    fetchPeople = new People
    fetchPeople.fetchCall = mockFetchCall
  });

  it('should remove unwanted info', () => {
    const response = fetchPeople.cleanPeople(mockHomeResponse);

    expect(response).toEqual(mockMappedResponse);
  })

});

describe('fetchHomeWorld', async () => {
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

  const mockFetchCall = jest.fn(() => {
    return mockHomeResponse;
  });

  beforeEach(() => {
    fetchPeople = new People
    fetchPeople.fetchCall = mockFetchCall
  });

  it('should call fetchCall once for each array element', async () => {
    await fetchPeople.fetchHomeWorld(mockHomeResponse);

    expect(fetchPeople.fetchCall.mock.calls.length).toEqual(2)
  });

});

describe('fetchSpecies', async () => {
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

  const mockFetchCall = jest.fn(() => {
    return mockHomeResponse;
  });

  beforeEach(() => {
    fetchPeople = new People
    fetchPeople.fetchCall = mockFetchCall
  });

  it('should call fetchCall once for each array element', async () => {
    await fetchPeople.fetchSpecies(mockHomeResponse);

    expect(fetchPeople.fetchCall.mock.calls.length).toEqual(2)
  });

});