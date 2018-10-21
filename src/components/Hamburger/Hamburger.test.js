import React from 'react'
import { shallow } from 'enzyme';

import Hamburger from './Hamburger'

describe('Hamburger', () => {
  let wrapper;
  let mockHamburgerChange = jest.fn()

  const deployedState = {
    status: 'deployed',
    topToggled: 'top-toggled',
    middleToggled: 'middle-toggled',
    bottomToggled: 'bottom-toggled',
    topBladeToggled: 'top-blade-toggled',
    middleBladeToggled: 'middle-blade-toggled',
    bottomBladeToggled: 'bottom-blade-toggled',
    gripToggled: 'grip-toggled' 
  }

  const undeployedState = {
    status: 'closed',
    topToggled: '',
    middleToggled: '',
    bottomToggled: '',
    topBladeToggled: '',
    middleBladeToggled: '',
    bottomBladeToggled: '',
    gripToggled: ''
  }

  beforeEach(() => {
    wrapper = shallow(<Hamburger 
      hamburgerChange={mockHamburgerChange}
      status={undeployedState}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });



  it('should call hamburgerChange on click', async () => {
    wrapper.find('.lightsaburger').simulate('click')

    expect(mockHamburgerChange).toHaveBeenCalled();
  });
})