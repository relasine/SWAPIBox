import React from 'react';
import Vehicles from './Vehicles.js';

describe('Vehicles', async () => {

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
    fetchVehicles = new Vehicles;
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
  const fetchVehicles = new Vehicles;
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
      ],
      favorite: false,
      category: 'vehicles'
    },
    { 
      name: 'truck',
      info: [
        {model: 'Toyota'},
        {class: 'Pickup'},
        {passengers: '2'},
      ],
      favorite: false,
      category: 'vehicles'
    }
  ];

  it('should clean the data into the necessary format', () => {
    const returnValue = fetchVehicles.cleanVehicles(mockVehicles);
    
    expect(returnValue).toEqual(expected);
  })
})














