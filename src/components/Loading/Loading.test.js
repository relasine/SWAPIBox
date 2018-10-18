import React from 'react';
import Loading from './Loading';
import { shallow } from 'enzyme';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Loading 
  />)
});

describe('Loading', () => {
  it ('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});