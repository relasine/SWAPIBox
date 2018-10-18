import React from 'react';
import { shallow } from 'enzyme';
import CardCenterpiece from './CardCenterpiece';


describe('CardCenterpiece', () => {
  let wrapper;
  let mockSelection;

  beforeEach(() => {

  })

  it('should exist', () => {
    mockSelection = 'people'
    wrapper = shallow(<CardCenterpiece selection={mockSelection} />)

    expect(wrapper).toBeDefined();
  })

  it('should match snapshot', () => {
    mockSelection = 'people'
    wrapper = shallow(<CardCenterpiece selection={mockSelection} />)
    
    expect(wrapper).toMatchSnapshot();
  })

  it('should match snapshot', () => {
    mockSelection = 'planets'
    wrapper = shallow(<CardCenterpiece selection={mockSelection} />)
    
    expect(wrapper).toMatchSnapshot();
  })

    it('should match snapshot', () => {
    mockSelection = 'vehicles'
    wrapper = shallow(<CardCenterpiece selection={mockSelection} />)
    
    expect(wrapper).toMatchSnapshot();
  })

  it('should match snapshot', () => {
    mockSelection = 'favorites'
    wrapper = shallow(<CardCenterpiece selection={mockSelection} />)
    
    expect(wrapper).toMatchSnapshot();
  })
})