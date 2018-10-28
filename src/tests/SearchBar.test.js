import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../SearchBar';

describe('<SearchBar/>', () => {

  it('shallow renders correctly', () => {
    expect(shallow(<SearchBar/>));
  });

  it('has a input search element', () => {
    const wrapper = shallow(<SearchBar/>);
    const inputElement = wrapper.find('#input-search');
    expect(inputElement.length).toBe(1);
  });
});