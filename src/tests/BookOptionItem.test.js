import React from 'react';
import { shallow, mount } from 'enzyme';
import BookOptionItem from '../BookOptionItem';

describe('<BookOptionItem/>', () => {
  const onChangeBookChoice = jest.fn();
  const handleBookChoice = jest.fn();

  const props = {
    book: {
      id: 1,
      imageLinks: {
        thumbnail: 'path/to/thumbnail'
      }
    },
    checkedOption: 'read',
    label: 'Read',
    onChangeBookChoice: onChangeBookChoice,
    handleBookChoice: handleBookChoice,
    value: 'read'
  };

  it('shallow renders correctly', () => {
    expect(shallow(<BookOptionItem {...props}/>));
  });

  it('should be disabled and checked at the same time for the same checked attribute', () => {
    const wrapper = shallow(<BookOptionItem {...props}/>);
    const inputElement = wrapper.find('.book__value');

    expect(inputElement.length).toBe(1);
    expect(inputElement.prop('disabled')).toBeTruthy();
    expect(inputElement.prop('disabled')).toEqual(inputElement.prop('checked'));
  });
});