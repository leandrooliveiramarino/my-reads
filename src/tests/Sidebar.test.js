import React from 'react';
import { shallow, mount } from 'enzyme';
import Sidebar from '../Sidebar';

describe('<Sidebar/>', () => {

  const props = {
    location: {
      pathname: '/search'
    }
  }

  it('shallow renders correctly', () => {
    expect(shallow(<Sidebar {...props}/>));
  });

  it('should not show filter element if pathname is "/search"', () => {
    const wrapper = shallow(<Sidebar {...props}/>);
    const filterElement = wrapper.find('Filter');

    expect(filterElement.length).toBe(0);
  });

  it('should show filter element if pathname is not "/search"', () => {
    const newProps = {
      ...props,
      location: {
        pathname: '/'
      }
    }
    const wrapper = shallow(<Sidebar {...newProps}/>);
    const filterElement = wrapper.find('Filter');

    expect(filterElement.length).toBe(1);
  });

  it('should render the DevelopedBy component', () => {
    const wrapper = shallow(<Sidebar {...props}/>);
    const developedByComponent = wrapper.find('DevelopedBy');

    expect(developedByComponent.length).toBe(1);
  });
});