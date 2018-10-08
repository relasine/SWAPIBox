import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})