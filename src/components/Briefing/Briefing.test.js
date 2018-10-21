import React from 'react';
import Briefing from './Briefing';

import { shallow } from 'enzyme';

let wrapper;
let mockCrawl = 'test';
let mockTitle = 'test';
let mockId = 1;

beforeEach(() => {
  wrapper = shallow(<Briefing 
                      crawl={mockCrawl} 
                      title={mockTitle} 
                      id={mockId}
                    />);
});

describe('Briefing', () => {
  it ('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});