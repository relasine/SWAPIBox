import React from 'react';
import FetchPlanets from './fetchPlanets';

describe('fetchPlanets', async () => {
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
      fetchPlanets = new FetchPlanets;
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

// calls fetch with correct data
// calls fetchResidents
// returns cleanPlanets

// cleans the object

// fetchResidents
// calls fetch the appropriate number of times
// returns none if no reseidents
// returns an array if there are residents