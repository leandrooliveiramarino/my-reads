import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from '../../Sidebar/MenuItem';

describe('<MenuItem/>', () => {

  const props = {
    to: '/',
    title: 'Menu title',
    active: {
      isExact: false,
      pathname: '/'
    }
  };

  it('shallow renders correctly', () => {
    expect(shallow(<MenuItem {...props}/>));
  });

  it('should not have the active class', () => {
    const wrapper = shallow(<MenuItem {...props}/>);

    expect(wrapper.find('li').prop('className'))
      .toEqual(expect.not.stringContaining('active'));
  });

  it('should have a Link element', () => {
    const wrapper = shallow(<MenuItem {...props}/>);

    expect(wrapper.find('Link').length).toBe(1);
  });
});