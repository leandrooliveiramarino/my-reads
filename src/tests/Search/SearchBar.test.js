import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../../Search/SearchBar';

describe('<SearchBar/>', () => {

  const props = {
    handleOnSearch: jest.fn()
  };

  it('shallow renders correctly', () => {
    expect(shallow(<SearchBar {...props} />));
  });

  it('has a input search element', () => {
    const wrapper = shallow(<SearchBar {...props} />);
    const inputElement = wrapper.find('#input-search');
    expect(inputElement.length).toBe(1);
  });
});