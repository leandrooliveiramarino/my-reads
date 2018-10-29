import React from 'react';
import { shallow, mount } from 'enzyme';
import Shelf from '../../Shelves/Shelf';
import { booksFound } from '../utils/mockData';

describe('<Shelf/>', () => {

  const props = {
    books: booksFound(),
    onChangeBookChoice: jest.fn(),
    status: 'read',
    title: 'Read',
    showHr: false
  };

  it('shallow renders correctly', () => {
    expect(shallow(<Shelf {...props}/>));
  });

  it('render books', () => {
    const wrapper = shallow(<Shelf {...props}/>);
    const books = wrapper.find('Book');

    expect(books.length).toBeGreaterThan(0);
  });

  it('render "There are no books here" text if there is no books', () => {
    const newProps = {
      ...props,
      books: [],
    };
    const wrapper = shallow(<Shelf {...newProps} />);
    const resultElement = wrapper.find('.book-list p');

    expect(resultElement.length).toBe(1);
    expect(resultElement.text()).toBe('There are no books here');
  });

  it('should not show hr element if it\'s set to false', () => {
    const wrapper = shallow(<Shelf {...props} />);
    const resultElement = wrapper.find('hr');

    expect(resultElement.length).toBe(0);
  });
});