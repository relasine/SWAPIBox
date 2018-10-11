import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';
import Card from '../Card/Card';

describe('CardContainer', () => {
  let wrapper;
  let mockPeople;
  let mockSelection;
  let mockPlanets;
  let mockVehicles;

  beforeEach(() => {
    mockPeople = [{
        name: 'Luke',
        info: [
          {homeworld: 'Earch'},
          {language: 'English'},
          {species: 'Human'},
          {population: 'billions'}
        ]
      }]
    mockPlanets = [{
        name: "Earth",
        info: [
          {terrain: 'mountains'},
          {population: 'billions'},
          {climate: 'warm'},
          {residents: 'Bob, Sally, and Steve'}
        ]
      }]
    mockVehicles = [{
        name: 'car',
        info: [
          {model: 'toyota'},
          {class: 'hybrid'},
          {passengers: '2'}
        ]
      }]
    wrapper = shallow(<CardContainer 
                        people={mockPeople}
                        planets={mockPlanets}
                        vehicles={mockVehicles}
                        selection={mockSelection} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should render all the people cards', () => {
    mockSelection = 'people'
    wrapper = shallow(<CardContainer 
                        people={mockPeople}
                        planets={mockPlanets}
                        vehicles={mockVehicles}
                        selection={mockSelection} />)
    expect(wrapper.find(Card).length).toEqual(1);
  })

  it('should render all the planet cards', () => { 
    mockSelection = 'planets'
    wrapper = shallow(<CardContainer 
                        people={mockPeople}
                        planets={mockPlanets}
                        vehicles={mockVehicles}
                        selection={mockSelection} />)
    expect(wrapper.find(Card).length).toEqual(1);
  })

  it('should render all the vehicle cards', () => {
    mockSelection = 'vehicles'
    wrapper = shallow(<CardContainer 
                        people={mockPeople}
                        planets={mockPlanets}
                        vehicles={mockVehicles}
                        selection={mockSelection} />)
    expect(wrapper.find(Card).length).toEqual(1);
  })
})