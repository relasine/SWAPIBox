import React from 'react';
import { shallow } from 'enzyme';
import Crawl from './Crawl';

describe('Crawl', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Crawl />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})