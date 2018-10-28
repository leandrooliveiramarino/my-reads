import React from 'react';
import { shallow } from 'enzyme';
import NavbarButtons from '../NavbarButtons';

describe('<NavbarButtons/>', () => {
  it('shallow renders correctly', () => {
    expect(shallow(<NavbarButtons/>));
  });

  it('has the Navbar component', () => {
    const wrapper = shallow(<NavbarButtons/>);
    expect(wrapper.find('NavbarWrapper').length).toBe(1);
  });

  it('has the navbar-toggler button', () => {
    const wrapper = shallow(<NavbarButtons/>);
    expect(wrapper.find('.navbar-toggler').length).toBe(1);
  });

  it('has a LinkButton component', () => {
    const wrapper = shallow(<NavbarButtons/>);
    expect(wrapper.find('LinkButton').length).toBe(1);
  });
});