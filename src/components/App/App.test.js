import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import fetchCall from '../../helpers/fetchCalls'
import Vehicles from '../../helpers/Vehicles'
import Planets from '../../helpers/Planets'
import People from '../../helpers/People'
import LocalStorage from '../../setupTests'

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
    wrapper.instance().fetchCall = jest.fn()
    let localStorage = new LocalStorage
    window.localStorage = localStorage
  });

  afterEach(() => {
    localStorage.clear() 
  })

  const defaultState = {
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
    fetchPlanets: new Planets(),
    favorites: JSON.parse(localStorage.getItem('favorites')) || []
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

  describe('componentDidMount', () => {
    it('should call crawlCall() on componentDidMount', () => {
      wrapper.instance().crawlCall = jest.fn()
      wrapper.instance().componentDidMount()
      expect(wrapper.instance().crawlCall).toHaveBeenCalled()
    });
  })

  describe('crawlCall', () => {
    it('should call getFilms when crawlCall is called if data in LS', () => {
      const mockGetFilms = jest.fn()
      wrapper.instance().getFilms = mockGetFilms;
      localStorage.films = JSON.stringify({results: [{num: '1'}, {num: '1'}], count: 2});

      wrapper.instance().crawlCall()

      expect(mockGetFilms).toHaveBeenCalled()
    });
  })

  describe('getFilms', () => {
    it('should set state when getFilms is called', () => {
      localStorage.films = JSON.stringify({results: [{num: '1'}, {num: '1'}], count: 2});
      wrapper.instance().getFilms()

      expect(wrapper.state().openingCrawl).toEqual({num: '1'})
    });
  })

  describe('fetchFilms', () => {
    it('should set state when fetchFilms is called', async () => {
      wrapper.state().fetchCall = jest.fn(() => {
        return {results: [{num: '1'}, {num: '1'}], count: 2};
      });

      await wrapper.instance().fetchFilms();

      expect(wrapper.state().openingCrawl).toEqual({num: '1'})
    });

    it('should set localStorage when fetchFilms is called', async () => {
      const mockResponse = {results: [{num: '1'}, {num: '1'}], count: 2}
      wrapper.state().fetchCall = jest.fn(() => {
        return mockResponse;
      });

      await wrapper.instance().fetchFilms();

      expect(localStorage.films).toEqual(JSON.stringify(mockResponse))
    })

    it('should set an error on state after a failed fetchFilms call', async () => {
      const mockFetch = jest.fn().mockImplementation(() =>
        Promise.reject());
      wrapper.state().fetchCall = mockFetch;

      await wrapper.instance().fetchFilms();

      expect(wrapper.state().error).toEqual(true);
    });
  })

  describe('toggleFavorite', () => {
    
    const mockCardData = {name: 'Luke'};
    
    it('should call toggleFavoriteInDatabase', () => {
      wrapper.instance().toggleFavoriteInDatabase = jest.fn();

      wrapper.instance().toggleFavorite(mockCardData);

      expect(wrapper.instance().toggleFavoriteInDatabase).toHaveBeenCalled();
    }) 

    it('should call removeFavorite if it is already a favorite', () => {
      wrapper.instance().removeFavorite = jest.fn();
      wrapper.setState({favorites: [{name: 'Luke'}]});

      wrapper.instance().toggleFavorite(mockCardData);

      expect(wrapper.instance().removeFavorite).toHaveBeenCalled();
    })
    

    it('should toggle card favorite property to true', () => {
      wrapper.setState({favorites: [{name: 'Darth', favorite: true}]});

      wrapper.instance().toggleFavorite(mockCardData)

      expect(wrapper.state().favorites).toEqual([{name: 'Darth', favorite: true}, {name: 'Luke', favorite: true}])
    })

    it('should set the favorite into local storage', () => {
      wrapper.instance().toggleFavorite(mockCardData)

      expect(window.localStorage.favorites).toEqual(JSON.stringify([{name: 'Luke'}]))
    })

    it('should update state', () => {
      wrapper.instance().toggleFavorite(mockCardData)
      // expect(wrapper.state().totalFavorites).toEqual(1)
      expect(wrapper.state().favorites).toEqual([{name: 'Luke'}])
    })
  })

  describe('toggleFavoriteInDatabase', () => {
    const mockCardData = {name: 'Luke', favorite: false};

    it('should toggle favorite property on selected card', () => {
      wrapper.instance().toggleFavoriteInDatabase(mockCardData)
//check on that card if favorite is true
      expect(wrapper.find().favorite).toEqual(true)
    })

    it('should set local storage', () => {

    })
  })

  describe('removeFavorite', () => {
    const mockCardData = {name: 'Luke'};

    it('should should remove the card from favorites in local storage', () => {
      wrapper.setState({ favorites: [{name: 'Darth'}, {name: 'Luke'}]}) ;
      localStorage.setItem('favorites', JSON.stringify([{name: 'Darth'}, {name: 'Luke'}])),

      wrapper.instance().removeFavorite(mockCardData),
      
      expect(window.localStorage.favorites).toEqual(JSON.stringify([{name: 'Darth'}]))
    })

    it('should update state', () => {
      wrapper.setState({ 
                favorites: [{name: 'Darth'}, {name: 'Luke'}], 
                totalFavorites: 2
              })

      wrapper.instance().removeFavorite(mockCardData)
      expect(wrapper.state().totalFavorites).toEqual(1)
      expect(wrapper.state().favorites).toEqual([{name: 'Darth'}])
    })  
  })

  describe('handleSelection', () => {
    it('should call callFetchPeople if people is currentSelection', () => {
      const mockCurrentSelection = 'people';
      wrapper.instance().callFetchPeople = jest.fn();

      wrapper.instance().handleSelection(mockCurrentSelection)
      expect(wrapper.instance().callFetchPeople).toHaveBeenCalled();
    });

    it('should call callFetchVehicles if vehicles is currentSelection', () => {
      const mockCurrentSelection = 'vehicles';
      wrapper.instance().callFetchVehicles = jest.fn();

      wrapper.instance().handleSelection(mockCurrentSelection)
      expect(wrapper.instance().callFetchVehicles).toHaveBeenCalled();
    });

    it('should call callFetchPlanets if planets is currentSelection', () => {
      const mockCurrentSelection = 'planets';
      wrapper.instance().callFetchPlanets = jest.fn();

      wrapper.instance().handleSelection(mockCurrentSelection)
      expect(wrapper.instance().callFetchPlanets).toHaveBeenCalled();
    });
  })

  describe('callFetchVehicles', () => {
    it('should call fetchVehicles if callFetchVehicles is called', async () => {
      const mockFetch = jest.fn();
      const mockVehicleClass = {fetchVehicles: mockFetch}
      wrapper.state().fetchVehicles = mockVehicleClass;

      await wrapper.instance().callFetchVehicles();
      expect(mockFetch).toHaveBeenCalled();
    });

    it('should set an error on state after a failed fetchVehicles call', async () => {
      const mockFetch = jest.fn().mockImplementation(() =>
        Promise.reject());
      wrapper.state().fetchVehicles = mockFetch;

      await wrapper.instance().callFetchVehicles();

      expect(wrapper.state().error).toEqual(true);
    });

    it('should call pullVehicleData if data in localStorage', () => {
      localStorage.setItem('vehicles', JSON.stringify([{test: 'test'}]))
      wrapper.instance().pullVehicleData = jest.fn()

      wrapper.instance().callFetchVehicles();

      expect(wrapper.instance().pullVehicleData).toHaveBeenCalled();
    });

    it('should call fetchVehicleData if no data in localStorage', () => {
      wrapper.instance().fetchVehicleData = jest.fn();

      wrapper.instance().callFetchVehicles();

      expect(wrapper.instance().fetchVehicleData).toHaveBeenCalled();
    })
  })

  describe('pullVehicleData', () => {
    it('should check localStorage when pullVehicleData is called', async () => {
      localStorage.setItem('vehicles', JSON.stringify([{test: 'test'}]))
      
      await wrapper.instance().pullVehicleData()
      expect(wrapper.state().vehicles).toEqual([{test: 'test'}])
    })
  })

  describe('fetchVehicleData', () => {
    it('should set state after fetchVehicleData is called', async () => {
      const mockFetch = jest.fn(() => {
        return [{vehicle: 'car'}, {vehicle: 'boat'}]
      });
      const mockVehicleClass = {fetchVehicles: mockFetch}
      wrapper.state().fetchVehicles = mockVehicleClass;
      
      await wrapper.instance().fetchVehicleData();

      expect(wrapper.state().vehicles).toEqual([{vehicle: 'car'}, {vehicle: 'boat'}])
    });

    it('should put data into localStorage when fetchVehicleData is called', async () => {
      const mockFetch = jest.fn(() => { 
        return [{test: 'test'}]
      });
      const mockFetchVehicles = {fetchVehicles: mockFetch}
      wrapper.state().fetchVehicles = mockFetchVehicles

      await wrapper.instance().fetchVehicleData()
      expect(window.localStorage.vehicles).toEqual(JSON.stringify([{test: 'test'}]))
    })    
  })

  describe('callFetchPeople', () => {
    it('should call fetchPeople if callFetchPeople is called', async () => {
      const mockFetch = jest.fn();
      const mockPeopleClass = {fetchPeople: mockFetch}
      wrapper.state().fetchPeople = mockPeopleClass;

      await wrapper.instance().callFetchPeople();
      expect(mockFetch).toHaveBeenCalled();
    });

    it('should set an error on state after a failed fetchPeople call', async () => {
      const mockFetch = jest.fn().mockImplementation(() =>
        Promise.reject());
      wrapper.state().fetchPeople = mockFetch;

      await wrapper.instance().callFetchPeople();

      expect(wrapper.state().error).toEqual(true);
    });

    it('should call pullPeopleData if data in localStorage', () => {
      localStorage.setItem('people', JSON.stringify([{test: 'test'}]))
      wrapper.instance().pullPeopleData = jest.fn()

      wrapper.instance().callFetchPeople();

      expect(wrapper.instance().pullPeopleData).toHaveBeenCalled();
    });

    it('should call fetchPeopleData if no data in localStorage', () => {
      wrapper.instance().fetchPeopleData = jest.fn();

      wrapper.instance().callFetchPeople();

      expect(wrapper.instance().fetchPeopleData).toHaveBeenCalled();
    })
  })

  describe('pullPeopleData', () => {
    it('should check localStorage when pullPeopleData is called', async () => {
      localStorage.setItem('people', JSON.stringify([{test: 'test'}]))
      
      await wrapper.instance().pullPeopleData()
      expect(wrapper.state().people).toEqual([{test: 'test'}])
    })
  })

  describe('fetchPeopleData', () => {
    it('should put data into localStorage when fetchPeopleData is called', async () => {
      const mockFetch = jest.fn(() => { 
        return [{test: 'test'}]
      });
      const mockFetchPeople = {fetchPeople: mockFetch}
      wrapper.state().fetchPeople = mockFetchPeople

      await wrapper.instance().fetchPeopleData()
      expect(window.localStorage.people).toEqual(JSON.stringify([{test: 'test'}]))
    })

    it('should set state after fetchPeopleData is called', async () => {
      const mockFetch = jest.fn(() => {
        return [{person: 'joe'}, {person: 'sara'}]
      });
      const mockPeopleClass = {fetchPeople: mockFetch}
      wrapper.state().fetchPeople = mockPeopleClass;
      
      await wrapper.instance().fetchPeopleData();

      expect(wrapper.state().people).toEqual([{person: 'joe'}, {person: 'sara'}])
    });
  })

  describe('callFetchPlanets', () => {
    it('should call fetchPlanetData if no data in localStorage', () => {
      wrapper.instance().fetchPlanetData = jest.fn();

      wrapper.instance().callFetchPlanets();

      expect(wrapper.instance().fetchPlanetData).toHaveBeenCalled();
    })

    it('should call pullPlanetData if data in localStorage', () => {
      localStorage.setItem('planets', JSON.stringify([{test: 'test'}]))
      wrapper.instance().pullPlanetData = jest.fn()

      wrapper.instance().callFetchPlanets();

      expect(wrapper.instance().pullPlanetData).toHaveBeenCalled();
    });
  })

  describe('fetchPlanetData', () => {
    it('should call fetchPlanets if fetchPlanetData is called', async () => {
      const mockFetch = jest.fn();
      const mockPlanetsClass = {fetchPlanets: mockFetch}
      wrapper.state().fetchPlanets = mockPlanetsClass;

      await wrapper.instance().fetchPlanetData();
      expect(mockFetch).toHaveBeenCalled();
    });
    
    it('should set state after fetchPlanetData is called', async () => {
      const mockFetch = jest.fn(() => {
        return [{planet: 'earth'}, {planet: 'mars'}]
      });
      const mockPlanetClass = {fetchPlanets: mockFetch}
      wrapper.state().fetchPlanets = mockPlanetClass;
      
      await wrapper.instance().fetchPlanetData();

      expect(wrapper.state().planets).toEqual([{planet: 'earth'}, {planet: 'mars'}])
    });

    it('should set an error on state after a failed fetchPlanets call', async () => {
      const mockFetch = jest.fn().mockImplementation(() =>
        Promise.reject());
      wrapper.state().fetchPlanets = mockFetch;

      await wrapper.instance().fetchPlanetData();

      expect(wrapper.state().error).toEqual(true);
    });

    it('should put data into localStorage when fetchPlanetData is called', async () => {
      const mockFetch = jest.fn(() => { 
        return [{test: 'test'}]
      });
      const mockFetchPlanets = {fetchPlanets: mockFetch}
      wrapper.state().fetchPlanets = mockFetchPlanets

      await wrapper.instance().fetchPlanetData()
      expect(window.localStorage.planets).toEqual(JSON.stringify([{test: 'test'}]))
    })
  })

  describe('pullPlanetData', () => {
    it('should check localStorage when pullPlanetData is called', async () => {
      localStorage.setItem('planets', JSON.stringify([{test: 'test'}]))
      
      await wrapper.instance().pullPlanetData()
      expect(wrapper.state().planets).toEqual([{test: 'test'}])
    }) 
  })


})



















