import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import { wrap } from 'module';
import { Route } from 'react-router-dom';

describe('<App/>', () => {
  it('shallow renders correctly', () => {
    expect(shallow(<App />));
  });

  it('has the main wrapper', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('.wrapper').length).toBe(1);
  });

  it('has has two routes', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('Route').length).toBe(2);
  });
});