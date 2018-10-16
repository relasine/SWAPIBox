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
  let mockFavorites;

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

    wrapper = shallow(<CardContainer 
                        data={mockPeople}
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
                        data={mockPeople}
                      />)
    expect(wrapper.find(Card).length).toEqual(1);
  })

  it('should render all the planet cards', () => { 
    mockSelection = 'planets'
    wrapper = shallow(<CardContainer 
                        data={mockPeople}
                      />)
    expect(wrapper.find(Card).length).toEqual(1);
  })

  it('should render all the vehicle cards', () => {
    mockSelection = 'vehicles'
    wrapper = shallow(<CardContainer 
                        data={mockPeople}
                      />)
    expect(wrapper.find(Card).length).toEqual(1);
  })

  it('should render all the favorite cards', () => {
    mockSelection = 'favorites'
    wrapper = shallow(<CardContainer 
                        data={mockPeople}
                      />)
    expect(wrapper.find(Card).length).toEqual(1);
  });
  it('should render Loading if loading is true', () => {
    let mockLoading = true

    wrapper = shallow(<CardContainer
                        data={mockPeople}
                        loading={mockLoading}
                      />)
    expect(wrapper).toMatchSnapshot()
  })
    it('should render Error if error is true', () => {
    let mockError = true

    wrapper = shallow(<CardContainer
                        data={mockPeople}
                        error={mockError}
                      />)
    expect(wrapper).toMatchSnapshot()
  })
})