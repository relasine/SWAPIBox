/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import CardCenterpiece from './CardCenterpiece';


describe('CardCenterpiece', () => {
  let wrapper;
  let mockSelection;


  it('should exist', () => {
    mockSelection = 'people';
    wrapper = shallow(<CardCenterpiece totalFavorites={3} selection={mockSelection} />);

    expect(wrapper).toBeDefined();
  });

  it('should match snapshot if selection is people', () => {
    mockSelection = 'people';
    wrapper = shallow(<CardCenterpiece totalFavorites={3} selection={mockSelection} />);
    
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if selection is planets', () => {
    mockSelection = 'planets';
    wrapper = shallow(<CardCenterpiece totalFavorites={3} selection={mockSelection} />);
    
    expect(wrapper).toMatchSnapshot();
  });

    it('should match snapshot if selection is vehicles', () => {
    mockSelection = 'vehicles';
    wrapper = shallow(<CardCenterpiece totalFavorites={3} selection={mockSelection} />);
    
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if selection is favorites', () => {
    mockSelection = 'favorites';
    wrapper = shallow(<CardCenterpiece totalFavorites={3} selection={mockSelection} />);
    
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if selection is not people/planets/vehicles/favorites', () => {
    mockSelection = 'films';
    wrapper = shallow(<CardCenterpiece totalFavorites={3} selection={mockSelection} />);
    
    expect(wrapper).toMatchSnapshot();
  });
})