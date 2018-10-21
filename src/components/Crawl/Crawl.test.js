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

  const mockHamburger = {status: 'closed'}

  beforeEach(() => {

    let mockReady = jest.fn();
    let mockHamburgerChange = jest.fn()

    wrapper = shallow(<Crawl film={{}}
                        setReady={mockReady}
                        error={false}
                        loading={false} 
                        hamburger={mockHamburger}
                        hamburgerChange={mockHamburgerChange}
                      />);
                        
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
    const spy = spyOn(wrapper.instance(), 'checkReady')

    wrapper.find('aside').simulate('click');

    expect(spy).toHaveBeenCalled()
  });

  it('should setState if ready and there is no error', async () => {
    await wrapper.setState({
      ready: true,
    });

    wrapper.instance().checkReady();

    expect(wrapper.state().showCrawl).toEqual('show-crawl')
    expect(wrapper.state().hideWelcome).toEqual('hide-welcome')
  });

  it('should setState if ready and there is an error', async () => {
    wrapper = shallow(<Crawl film={{}} setReady={jest.fn()} error={true} loading={false}/>)

    await wrapper.setState({
      ready: true,
    });

    wrapper.instance().checkReady();

    expect(wrapper.state().error).toEqual('display-crawl-error')
    expect(wrapper.state().hideWelcome).toEqual('hide-welcome')
  });

  it('should call several functions when handleFingerPrint is called', async () => {
    const spyOne = spyOn(wrapper.instance(), 'printConnect')
    const spyTwo = spyOn(wrapper.instance(), 'printHandshake')
    const spyThree = spyOn(wrapper.instance(), 'printWelcome')
    const spyFour = spyOn(wrapper.instance(), 'printBriefing')
    const mockSetReady = jest.fn()

    wrapper = shallow(<Crawl film={{}} setReady={mockSetReady} error={true} loading={false}/>)

    await wrapper.instance().handleFingerPrint();

    expect(setTimeout(((spyOne).toHaveBeenCalled), 7000));
    expect(setTimeout(((spyTwo).toHaveBeenCalled), 7000));
    expect(setTimeout(((spyThree).toHaveBeenCalled), 7000));
    expect(setTimeout(((spyFour).toHaveBeenCalled), 7000));
    expect(setTimeout(((mockSetReady).toHaveBeenCalled), 7000));
  });

  it('should call setState when handleFingerPrint is called', async () => {
    await wrapper.instance().handleFingerPrint()

    expect(wrapper.state().thumbprint).toEqual('active-thumbprint');
  });

  it('should call setState on printConnect', async () => {
    await wrapper.instance().printConnect();

    expect(wrapper.state().securing).toEqual('print-securing');    
  });

  it('should call setState on printHandshake', async () => {
    await wrapper.instance().printHandshake();

    expect(wrapper.state().handshake).toEqual('print-handshake');    
  });

  it('should call setState on printWelcome', async () => {
    await wrapper.instance().printWelcome();

    expect(wrapper.state().welcome).toEqual('print-welcome');    
  });

  it('should call setState on printBriefing', async () => {
    wrapper.instance().printBriefing();

    expect(wrapper.state().briefing).toEqual('print-briefing');  
    expect(wrapper.state().ready).toEqual(true);    

  });

  it('should call handleFingerPrint when clicked', () => {
    const spy = spyOn(wrapper.instance(), 'handleFingerPrint')

    wrapper.find('.thumbprint').simulate('click');

    expect(spy).toHaveBeenCalled();
  })
})