import React from 'react';
import FetchVehicles from './fetchVehicles.js';

describe('fetchVehicles', async () => {

  let fetchVehicles;

  const mockResponse = {
    results: [
      {
        name: 'car',
        model: 'Toyota',
        class: 'Hybrid',
        passengers: '4',

      },
      { 
        name: 'truck',
        model: 'Toyota',
        class: 'Pickup',
        passengers: '2',
      }
    ]
  };

  const mockFetchCall = jest.fn(() => {
    return mockResponse;
  });

  beforeEach(()=> {
    fetchVehicles = new FetchVehicles;
    fetchVehicles.fetchCall = mockFetchCall;
  })

  it('should call the fetchCall', () => {
    fetchVehicles.fetchVehicles();
    expect(mockFetchCall).toHaveBeenCalled();
  });

  it('should call cleanVehicles', async () => {
    fetchVehicles.cleanVehicles = jest.fn();
    await fetchVehicles.fetchVehicles();
    expect(fetchVehicles.cleanVehicles).toHaveBeenCalled();
  })
})

describe('cleanVehicles', () => {
  const fetchVehicles = new FetchVehicles;
  const mockVehicles = {results: [
      {
        name: 'car',
        model: 'Toyota',
        vehicle_class: 'Hybrid',
        passengers: '4',
      },
      { 
        name: 'truck',
        model: 'Toyota',
        vehicle_class: 'Pickup',
        passengers: '2',
      }
    ]
  };
  const expected = [
    {
      name: 'car',
      info: [
        {model: 'Toyota'},
        {class: 'Hybrid'},
        {passengers: '4'},
      ]
    },
    { 
      name: 'truck',
      info: [
        {model: 'Toyota'},
        {class: 'Pickup'},
        {passengers: '2'},
      ]
    }
  ];

  it('should clean the data into the necessary format', () => {
    const returnValue = fetchVehicles.cleanVehicles(mockVehicles);
    
    expect(returnValue).toEqual(expected);
  })
})














