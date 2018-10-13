import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import fetchCall from '../../helpers/fetchCalls'
import Vehicles from '../../helpers/Vehicles'
import Planets from '../../helpers/Planets'
import People from '../../helpers/People'

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
    wrapper.instance().fetchCall = jest.fn()
  });

  const defaultState = {
    totalFavorites: 0,
    currentSelection: '',
    openingCrawl: {},
    people: [],
    vehicles: [],
    planets: [],
    error: false,
    loading: true,
    fetchCall: fetchCall,
    fetchVehicles: new Vehicles(),
    fetchPeople: new People(),
    fetchPlanets: new Planets()
  };

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(JSON.stringify(wrapper.state())).toEqual(JSON.stringify(defaultState));
  });

  it('should call crawlCall() on componentDidMount', () => {
    wrapper.instance().crawlCall = jest.fn()
    wrapper.instance().componentDidMount()
    expect(wrapper.instance().crawlCall).toHaveBeenCalled()
  });

  it('should call fetch when crawlCall is called', async () => {
    const mockFetch = jest.fn()
    wrapper.state().fetchCall = mockFetch
    await wrapper.instance().crawlCall()
    expect(mockFetch).toHaveBeenCalled()

  });

  it('should set state when crawlCall is called', async () => {
    const mockFetch = jest.fn(() => { return {
      results: [{film: 'test'}, {film: 'test'}], count: 2
    }});
    wrapper.state().fetchCall = mockFetch
    await wrapper.instance().crawlCall()

    expect(wrapper.state().openingCrawl).toEqual({film: 'test'})
  });

  it('should call callFetchPeople if people is currentSelection', () => {

  });

  it('should call callFetchVehicles if vehicles is currentSelection', () => {

  });

  it('should call callFetchPlanets if planets is currentSelection', () => {

  });

  it('should call fetchVehicles if callFetchVehicles is called', async () => {
    const mockFetch = jest.fn();
    const mockVehicleClass = {fetchVehicles: mockFetch}
    wrapper.state().fetchVehicles = mockVehicleClass;

    await wrapper.instance().callFetchVehicles();
    expect(mockFetch).toHaveBeenCalled();
  });

  it('should set state after callFetchVehicles is called', async () => {
    const mockFetch = jest.fn(() => {
      return [{vehicle: 'car'}, {vehicle: 'boat'}]
    });
    const mockVehicleClass = {fetchVehicles: mockFetch}
    wrapper.state().fetchVehicles = mockVehicleClass;
    
    await wrapper.instance().callFetchVehicles();

    expect(wrapper.state().vehicles).toEqual([{vehicle: 'car'}, {vehicle: 'boat'}])
  });

  it('should call fetchPeople if callFetchPeople is called', async () => {
    const mockFetch = jest.fn();
    const mockPeopleClass = {fetchPeople: mockFetch}
    wrapper.state().fetchPeople = mockPeopleClass;

    await wrapper.instance().callFetchPeople();
    expect(mockFetch).toHaveBeenCalled();
  });

  it('should set state after callFetchPeople is called', async () => {
    const mockFetch = jest.fn(() => {
      return [{person: 'joe'}, {person: 'sara'}]
    });
    const mockPeopleClass = {fetchPeople: mockFetch}
    wrapper.state().fetchPeople = mockPeopleClass;
    
    await wrapper.instance().callFetchPeople();

    expect(wrapper.state().people).toEqual([{person: 'joe'}, {person: 'sara'}])
  });

  it('should call fetchPlanets if callFetchPlanets is called', async () => {
    const mockFetch = jest.fn();
    const mockPlanetsClass = {fetchPlanets: mockFetch}
    wrapper.state().fetchPlanets = mockPlanetsClass;

    await wrapper.instance().callFetchPlanets();
    expect(mockFetch).toHaveBeenCalled();
  });

  it('should set state after callFetchPlanets is called', async () => {
    const mockFetch = jest.fn(() => {
      return [{planet: 'earth'}, {planet: 'mars'}]
    });
    const mockPlanetClass = {fetchPlanets: mockFetch}
    wrapper.state().fetchPlanets = mockPlanetClass;
    
    await wrapper.instance().callFetchPlanets();

    expect(wrapper.state().planets).toEqual([{planet: 'earth'}, {planet: 'mars'}])
  });


})
