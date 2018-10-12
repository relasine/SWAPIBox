import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  let wrapper;
  let mockHandleSelection;

  beforeEach(() => {
    mockHandleSelection = jest.fn()

    wrapper = shallow(<Button 
      buttonName="people"
      handleSelection={mockHandleSelection}
      currentSelection="people"
    />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have a className of button if selected', () => {
    expect(wrapper.hasClass('nav-button button-selected')).toEqual(true);
  })

  it('should render a button', () => {
    expect(wrapper.find('div').length).toEqual(1);
  })

  it('should call handleSelection on click', () => {
    wrapper.find('.nav-button').simulate('click');
    expect(mockHandleSelection).toHaveBeenCalled();
  })
})
