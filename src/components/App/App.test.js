import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)

  });

  const defaultState = {
    totalFavorites: 0,
    currentSelection: '',
    openingCrawl: {},
    people: [],
    vehicles: [],
    planets: [],
  };

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual(defaultState);
  });

  it('should call crawlCall() on componentDidMount', () => {

  });

  it('should call fetch when crawlCall is called', () => {

  });

  it('should set state when crawlCallis called', () => {

  });

  it('should call callFetchPeople if people is currentSelection', () => {

  });

  it('should call callFetchVehicles if vehicles is currentSelection', () => {

  });

  it('should call callFetchPlanets if planets is currentSelection', () => {

  });

  it('should call fetchVehicles if callFetchVehicles is called', () => {

  });

  it('should set state after callFetchVehicles is called', () => {

  });

  it('should call fetchPeople if callFetchPeople is called', () => {

  });

  it('should set state after callFetchPeople is called', () => {

  });

  it('should call fetchPlanets if callFetchPlanets is called', () => {

  });

  it('should set state after callFetchPlanets is called', () => {

  });


})
