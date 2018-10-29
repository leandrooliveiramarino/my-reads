import React from 'react';
import { shallow } from 'enzyme';
import NavbarButtons from '../../Navbar/NavbarButtons';

describe('<NavbarButtons/>', () => {

  const props = {
    location: {
      pathname: '/search'
    }
  };

  it('shallow renders correctly', () => {
    expect(shallow(<NavbarButtons {...props} />));
  });

  it('has the Navbar component', () => {
    const wrapper = shallow(<NavbarButtons {...props} />);
    expect(wrapper.find('NavbarWrapper').length).toBe(1);
  });

  it('has the navbar-toggler button', () => {
    const wrapper = shallow(<NavbarButtons {...props} />);
    expect(wrapper.find('.navbar-toggler').length).toBe(1);
  });

  it('has a LinkButton component', () => {
    const wrapper = shallow(<NavbarButtons {...props} />);
    expect(wrapper.find('LinkButton').length).toBe(1);
  });
});