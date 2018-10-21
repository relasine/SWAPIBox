import React from 'react';
import Error from './ErrorPage';
import { shallow } from 'enzyme';

let wrapper;


beforeEach(() => {
  wrapper = shallow(<Error errorState={true}

  />)
});

describe('Error', () => {
  it ('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});