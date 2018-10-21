import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';
import Card from '../Card/Card';

describe('CardContainer', () => {
  let wrapper;
  let mockPeople;
  let mockSelection;
  let mockToggleFavorite;
  let mockError;
  let mockLoading;
  
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
    
    mockToggleFavorite = jest.fn();
    mockError = false;
    mockLoading = false;
    mockSelection = 'people'

    wrapper = shallow(<CardContainer 
                        data={mockPeople}
                        selection={mockSelection}
                        toggleFavorite={mockToggleFavorite}
                        error={mockError}
                        loading={mockLoading}
                        totalFavorites={3} 
                      />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should render all the data cards', () => {
    expect(wrapper.find(Card).length).toEqual(1);
  })

  it('should render Loading if loading is true', () => {
    let mockLoading = true

    expect(wrapper).toMatchSnapshot()
  })
    it('should render Error if error is true', () => {
    let mockError = true

    expect(wrapper).toMatchSnapshot()
  })
})