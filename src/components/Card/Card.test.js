import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let wrapper;
  let mockData;
  let mockToggleFavorite

  beforeEach(() => {
    mockData = {
        name: 'Luke',
        info: [
          {homeworld: 'Earch'},
          {language: 'English'},
          {species: 'Human'},
          {population: 'billions'}
        ],
        favorite: false
      };

    mockToggleFavorite = jest.fn();

    wrapper = shallow(<Card 
                        data={mockData} 
                        toggleFavorite={mockToggleFavorite}
                      />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('sets favoritedClass to an empty string if passed down as a prop as false', () => {
    expect(wrapper.props().children.props.children[0].props.children.props.children.props.className).toEqual('fas fa-journal-whills ');
  });

  it('sets favoritedClass to a favorited if passed down as a prop as false', () => {
    const newTrueClass = {
        name: 'Luke',
        info: [
          {homeworld: 'Earch'},
          {language: 'English'},
          {species: 'Human'},
          {population: 'billions'}
        ],
        favorite: true
      };

    wrapper = shallow(<Card 
        data={newTrueClass} 
        toggleFavorite={mockToggleFavorite}
      />);

    expect(wrapper.props().children.props.children[0].props.children.props.children.props.className).toEqual('fas fa-journal-whills favorited');
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render all the stats on the card as p tags', () => {
    expect(wrapper.find('p').length).toEqual(4);
  });

  it('should call toggleFavorite on click', () => {
    wrapper.find('.card-wrapper').simulate('click');

    expect(mockToggleFavorite).toHaveBeenCalled();
  });
})