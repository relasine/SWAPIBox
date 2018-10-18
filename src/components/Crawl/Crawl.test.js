import React from 'react';
import { shallow } from 'enzyme';
import Crawl from './Crawl';

describe('Crawl', () => {
  let wrapper;

  beforeEach(() => {
    let mockReady = jest.fn();

    wrapper = shallow(<Crawl film={{}}
                        setReady={mockReady}
                        error={false}/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})