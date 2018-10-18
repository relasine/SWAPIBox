import React from 'react';
import { shallow } from 'enzyme';
import Crawl from './Crawl';

describe('Crawl', () => {
  let wrapper;
  let defaultState = {
    thumbprint: '',
    securing: '',
    handshake: '',
    welcome: '',
    briefing: '',
    fadeWelcome: '',
    hideWelcome: '',
    showCrawl: '',
    ready: false,
    error: ''
  }

  beforeEach(() => {
    wrapper = shallow(<Crawl film={{}}/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have default state', () => {
    expect(wrapper.state()).toEqual(defaultState)
  })

  it('should call checkReady onclick', () => {
    
  })
})