import React from 'react';
import { shallow } from 'enzyme';
import LinkButton from '../LinkButton';

describe('<LinkButton/>', () => {

  const props = {
    location: {
      pathname: '/search'
    }
  };

  it('shallow renders correctly', () => {
    expect(shallow(<LinkButton {...props}/>));
  });

  it('should have a Link element', () => {
    const wrapper = shallow(<LinkButton {...props}/>);
    expect(wrapper.find('Link').length).toBe(1);
  });
});