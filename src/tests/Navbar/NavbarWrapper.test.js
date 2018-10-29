import React from 'react';
import { shallow } from 'enzyme';
import NavbarWrapper from '../../Navbar/NavbarWrapper';

describe('<NavbarWrapper/>', () => {
  it('shallow renders correctly', () => {
    expect(shallow(<NavbarWrapper/>));
  });

  it('has a navbar wrapper', () => {
    const wrapper = shallow(<NavbarWrapper/>);
    expect(wrapper.find('.navbar-wrapper').length).toBe(1);
  });
});