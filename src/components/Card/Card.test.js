import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let wrapper;
  let mockData;

  beforeEach(() => {
    mockData = {
        name: 'Luke',
        info: [
          {homeworld: 'Earch'},
          {language: 'English'},
          {species: 'Human'},
          {population: 'billions'}
        ]
      };

    wrapper = shallow(<Card data={mockData} />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should render all the stats on the card as p tags', () => {
    expect(wrapper.find('p').length).toEqual(4);
  })
})