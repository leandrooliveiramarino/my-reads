import React from 'react';
import { shallow } from 'enzyme';
import Filter from '../Filter';
import { Route } from 'react-router-dom';
import MenuItem from '../MenuItem';

describe('<Filter/>', () => {
  it('shallow renders correctly', () => {
    expect(shallow(<Filter />));
  });

  it('has four routes element', () => {
    const wrapper = shallow(<Filter/>);
    expect(wrapper.find('Route').length).toBe(4);
  });
});