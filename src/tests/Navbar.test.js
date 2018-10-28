import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../Navbar';

describe('<Navbar/>', () => {
  it('shallow renders correctly', () => {
    expect(shallow(<Navbar/>));
  });

  it('has the navbar wrapper', () => {
    const wrapper = shallow(<Navbar/>);
    expect(wrapper.find('.navbar').length).toBe(1);
  });
});