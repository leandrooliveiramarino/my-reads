import React from 'react';
import { shallow, mount } from 'enzyme';
import BookOptions from '../../Book/BookOptions';

describe('<BookOptions/>', () => {

  const props = {
    book: {
      id: 1,
      title: 'BookOptions Title',
      imageLinks: {
        thumbnail: 'path/to/thumbnail'
      }
    },
    status: 'read',
    show: true,
    onChangeBookChoice: jest.fn(),
    isBookRemovable: false,
    toggleBookChoice: jest.fn()
  };

  it('shallow renders correctly', () => {
    expect(shallow(<BookOptions {...props}/>));
  });

  it('starts with checkedOption equals to empty string', () => {
    const wrapper = shallow(<BookOptions {...props}/>);
    const checkedOption = wrapper.state().checkedOption;

    expect(checkedOption).toBeFalsy();
  });

  it('must change checkedOption from empty string to a state', () => {
    const wrapper = mount(<BookOptions {...props}/>);
    const bookStatus = wrapper.find('.book__value').first();

    bookStatus.simulate('change');

    const checkedOptionStatus = wrapper.state().checkedOption;

    expect(checkedOptionStatus.length).toBeGreaterThan(0);
    expect(checkedOptionStatus).toBe('currentlyReading');
  });
});