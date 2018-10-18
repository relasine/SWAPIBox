import React from 'react';
import Briefing from './Briefing';

import { shallow } from 'enzyme';

let wrapper;


beforeEach(() => {
  wrapper = shallow(<Briefing crawl='' title='' id=''

  />)
});

describe('Briefing', () => {
  it ('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});