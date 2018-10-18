import React from 'react'
import { shallow } from 'enzyme';

import Hamburger from './Hamburger'

describe('Hamburger', () => {
  let wrapper;
  let mockHamburgerChange = jest.fn()
  let mockLoginWarning = jest.fn()

  const deployedState = {
    topToggled: 'top-toggled',
    middleToggled: 'middle-toggled',
    bottomToggled: 'bottom-toggled',
    topBladeToggled: 'top-blade-toggled',
    middleBladeToggled: 'middle-blade-toggled',
    bottomBladeToggled: 'bottom-blade-toggled',
    gripToggled: 'grip-toggled',
    login: 'hide-login'
  }

  const undeployedState = {
    topToggled: '',
    middleToggled: '',
    bottomToggled: '',
    topBladeToggled: '',
    middleBladeToggled: '',
    bottomBladeToggled: '',
    gripToggled: '',
    login: 'hide-login'
  }

  beforeEach(() => {
    wrapper = shallow(<Hamburger 
      hamburgerChange={mockHamburgerChange}
      loginWarning={mockLoginWarning}
      ready={true}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleHamburger on click',() => {
    let mockHandleHamburger = jest.fn()
    wrapper.instance().handleHamburger = mockHandleHamburger
    wrapper.find('.lightsaburger').simulate('click');

    expect(mockHandleHamburger).toHaveBeenCalled();
  });

  it('should update state on handleHamburger call if ready and unToggled', () => {
    wrapper.instance().handleHamburger();

    expect(wrapper.state()).toEqual(deployedState)
  });

  it('should update state on handleHamburger call if ready and toggled', async () => {
    await wrapper.setState({
      topToggled: 'top-toggled',
      middleToggled: 'middle-toggled',
      bottomToggled: 'bottom-toggled',
      topBladeToggled: 'top-blade-toggled',
      middleBladeToggled: 'middle-blade-toggled',
      bottomBladeToggled: 'bottom-blade-toggled',
      gripToggled: 'grip-toggled',
      login: 'hide-login'
    })
    wrapper.instance().handleHamburger();

    expect(wrapper.state()).toEqual(undeployedState)
  });

  it('should call hamburgerChange if ready and unToggled', () => {
    wrapper.instance().handleHamburger();

    expect(mockHamburgerChange).toHaveBeenCalled();
  });

  it('should call hamburgerChange if ready and toggled', async () => {
    await wrapper.setState({
      topToggled: 'top-toggled',
      middleToggled: 'middle-toggled',
      bottomToggled: 'bottom-toggled',
      topBladeToggled: 'top-blade-toggled',
      middleBladeToggled: 'middle-blade-toggled',
      bottomBladeToggled: 'bottom-blade-toggled',
      gripToggled: 'grip-toggled',
      login: 'hide-login'
    })

    wrapper.instance().handleHamburger();

    expect(mockHamburgerChange).toHaveBeenCalled();
  });

  it('should call loginWarning if not ready', () => {
    wrapper = shallow(<Hamburger 
      hamburgerChange={mockHamburgerChange}
      loginWarning={mockLoginWarning}
      ready={false}
    />);

    wrapper.instance().handleHamburger();

    expect(mockLoginWarning).toHaveBeenCalled();
  })
})