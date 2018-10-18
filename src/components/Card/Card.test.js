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
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should render all the stats on the card as p tags', () => {
    expect(wrapper.find('p').length).toEqual(4);
  })

  it('should call toggleFavorite on click', () => {
    wrapper.find('.card-wrapper').simulate('click');

    expect(mockToggleFavorite).toHaveBeenCalled();
  })

  it('should set favoriteClass to favorited if the passed down prop is true', () => {
    mockData.favorite = true;
    wrapper = shallow(<Card data={mockData} toggleFavorite={mockToggleFavorite} />);
    expect(wrapper.props().children.props.children[1].props.children[1].props.children[1].props.children.props.className).toEqual('fab fa-jedi-order favorite-icon favorited')
  })

  it('should not set favoriteClass to favorited if the passed down prop is false', () => {
    mockData.favorite = false;
    wrapper = shallow(<Card data={mockData} toggleFavorite={mockToggleFavorite} />);

    expect(wrapper.props().children.props.children[1].props.children[1].props.children[1].props.children.props.className).toEqual('fab fa-jedi-order favorite-icon ')
  })
})