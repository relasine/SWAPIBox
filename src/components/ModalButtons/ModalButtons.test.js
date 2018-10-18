import React from 'react';
import ModalButtons from './ModalButtons';
import { shallow } from 'enzyme';

let wrapper;
let mockCurrentSelection = 'people'
let mockHandleSelection = jest.fn();
let mockHamburger = ''

beforeEach(() => {
  wrapper = shallow(<ModalButtons 
    currentSelection={mockCurrentSelection}
    handleSelection={mockHandleSelection}
    hamburger={mockHamburger}
  />)
}) 

describe('ModalButtons', () => {
  it ('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});