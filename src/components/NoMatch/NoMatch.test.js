/* eslint-disable */

import React from 'react';
import NoMatch from './NoMatch';
import { shallow } from 'enzyme';

let wrapper;
let mockLocation = {pathname: '/badpath'}
const errorMessage = [ 'There is no entry within the archives for ', '/badpath' ]

beforeEach(() => {
  wrapper = shallow(<NoMatch 
    location={mockLocation}
  />);
});

describe('NoMatch', () => {
  it ('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should receive location as props', () => {
    expect(wrapper.props().children.props.children).toEqual(errorMessage);
  });

});