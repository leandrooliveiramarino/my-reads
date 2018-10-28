import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchResult from '../SearchResult';
import { booksFound } from './mockData';

describe('<SearchResult/>', () => {

  const props = {
    booksFound: booksFound(),
    onChangeBookChoice: jest.fn(),
    isBookRemovable: true,
    myBooks: [booksFound()[0], booksFound()[1]],
    isSearching: false
  };

  it('shallow renders correctly', () => {
    expect(shallow(<SearchResult {...props}/>));
  });

  it('render found books', () => {
    const wrapper = shallow(<SearchResult {...props}/>);
    const books = wrapper.find('Book');

    expect(books.length).toBeGreaterThan(0);
  });

  it('render "No books found" text if there is no books found', () => {
    const newProps = {
      ...props,
      booksFound: [],
      isSearching: true
    };
    const wrapper = shallow(<SearchResult {...newProps} />);
    const resultElement = wrapper.find('.no-books-found');

    expect(resultElement.length).toBe(1);
    expect(resultElement.text()).toBe('No books found');
  });

  it('should show the available terms search if no book was found', () => {
    const newProps = {
      ...props,
      booksFound: []
    };
    const wrapper = shallow(<SearchResult {...newProps} />);
    const availableTermsElement = wrapper.find('.search-result__available-search-terms');
    expect(availableTermsElement.length).toBe(1);
  });
});