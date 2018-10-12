import React from 'react';
import Planets from './Planets';

describe('Planets', async () => {
  let fetchPlanets;

  const mockResponse = {
    results: [
      {
        name: 'Earth',
        terrain: 'Lots of it',
        climate: 'Getting hotter',
        residents: ['tom', 'joe', 'lisa'],
        food: 'Have you tried pizza?'
      },
      {
        name: 'Mars',
        terrain: 'red',
        climate: 'cold',
        residents: ['moe', 'steph', 'jane'],
        food: 'none'
      }
    ]
  }

  const cleanedResponse = [
      {
        name: 'Earth',
        terrain: 'Lots of it',
        climate: 'Getting hotter',
        residents: 'Mostly cool',
      },
      {
        name: 'Mars',
        terrain: 'red',
        climate: 'cold',
        residents: 'not a lot of them',
      }
    ];

  const mockFetchCall = jest.fn(() => {
    return mockResponse;
  });

  beforeEach(() => {
    fetchPlanets = new Planets;
    fetchPlanets.fetchCall = mockFetchCall;
  });

  it('should make a fetchCall', () => {
    fetchPlanets.fetchPlanets();

    expect(mockFetchCall).toHaveBeenCalled();

  });

  it('should call fetchResidents', async () => {
    fetchPlanets.fetchResidents = jest.fn((mockResponse) => {
      return mockResponse;
    })

    await fetchPlanets.fetchPlanets();

    expect(fetchPlanets.fetchResidents).toHaveBeenCalled();
  })

  it('should call cleanPlanets', async () => {
    fetchPlanets.cleanPlanets = jest.fn();

    await fetchPlanets.fetchPlanets();

    expect(fetchPlanets.cleanPlanets).toHaveBeenCalled();
  })
})

describe('cleanPlanets', async () => {
  let fetchPlanets;

  const mockResponse = [
    {
      name: 'Earth',
      terrain: 'Lots of it',
      climate: 'Getting hotter',
      residents: ['tom', 'joe', 'lisa'],
      food: 'Have you tried pizza?'
    },
    {
      name: 'Mars',
      terrain: 'red',
      climate: 'cold',
      residents: ['moe', 'steph', 'jane'],
      food: 'none'
    }
  ]

const mappedResponse = [
    {
      name: 'Earth',
      info: [
        terrain: 'Lots of it',
        climate: 'Getting hotter',
        residents: ['tom', 'joe', 'lisa']
      ]

    },
    {
      name: 'Mars',
      info: [
        terrain: 'red',
        climate: 'cold',
        residents: ['moe', 'steph', 'jane']
      ]
    }
  ]

  const mockFetchCall = jest.fn(() => {
    return mockResponse;
  });

  beforeEach(() => {
    fetchPlanets = new Planets;
    fetchPlanets.fetchCall = mockFetchCall;
  });

  it('should return a curated object', () => {
    const reponse = fetchPlanets.cleanPlanets(mockResponse);

    expect(reponse).toEqual(mappedResponse)
  });
});

describe('fetchResidents', async () => {
  let fetchPlanets;

  const mockFetchCall = jest.fn(() => {
    return {name: 'brian'};
  });

  const mockResponse = [
    {
      name: 'Earth',
      terrain: 'Lots of it',
      climate: 'Getting hotter',
      residents: ['tom', 'joe', 'lisa'],
      food: 'Have you tried pizza?'
    },
    {
      name: 'Mars',
      terrain: 'red',
      climate: 'cold',
      residents: ['tom', 'joe', 'lisa'],
      food: 'none'
    }
  ]
  
  const noResidents = [
    {
      name: 'Earth',
      terrain: 'Lots of it',
      climate: 'Getting hotter',
      residents: [],
      food: 'Have you tried pizza?'
    },
  ]

  beforeEach(() => {
    fetchPlanets = new Planets;
    fetchPlanets.fetchCall = mockFetchCall;
  });

  it('should call fetchCall once for each element in the array', async () => {
    await fetchPlanets.fetchResidents(mockResponse);

    expect(fetchPlanets.fetchCall.mock.calls.length).toEqual(6);
  })

  it('should return an array of names if it has a length of at least one', async () => {
    const response = await fetchPlanets.fetchResidents(mockResponse);

    expect(response[0].residents).toEqual(['brian', 'brian', 'brian'])
    expect(response[1].residents).toEqual(['brian', 'brian', 'brian'])
  })

  it('should return an array with none in it if it does not get any names', async () => {
    fetchPlanets.fetchCall = jest.fn(() => {
      return
    })

    const response = await fetchPlanets.fetchResidents(noResidents);

    expect(response[0].residents).toEqual(['none'])

  })

})