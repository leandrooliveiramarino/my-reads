import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../Search';

jest.mock('../BooksAPI');

describe('<Search/>', () => {

  const props = {
    myBooks: [],
    onChangeBookChoice: jest.fn(),
    isBookRemovable: false
  };

  it('shallow renders correctly', () => {
    expect(shallow(<Search {...props}/>));
  });

  it('starts with isSearching initial state equals false', () => {
    const wrapper = shallow(<Search {...props}/>);
    const isSearchingState = wrapper.state().isSearching;

    expect(isSearchingState).toBeFalsy();
  });

  it('starts with booksFound initial state equals an empty array', () => {
    const wrapper = shallow(<Search {...props}/>);
    const booksFoundState = wrapper.state().booksFound;

    expect(booksFoundState.length).toBe(0);
  });

  it('starts with query initial state equals an empty string', () => {
    const wrapper = shallow(<Search {...props}/>);
    const queryState = wrapper.state().query;

    expect(queryState).toBeFalsy();
  });

  it('should have books in book state after searching for a valid book name', done => {
    const wrapper = mount(<Search {...props}/>);
    const inputSearch = wrapper.find('#input-search');
    const event = {target: { value: 'The' }};

    inputSearch.simulate('change', event);

    setTimeout(() => {
      const booksFoundState = wrapper.state().booksFound;
      expect(booksFoundState.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should have no books in book state after searching for a invalid book name', done => {
    const wrapper = mount(<Search {...props}/>);
    const inputSearch = wrapper.find('#input-search');
    const event = {target: { value: 'abc' }};

    inputSearch.simulate('change', event);

    setTimeout(() => {
      const booksFoundState = wrapper.state().booksFound;
      expect(booksFoundState.length).toBe(0);
      done();
    });
  });

  it('should have no books in book state after searching for an empty string book name', done => {
    const wrapper = mount(<Search {...props}/>);
    const inputSearch = wrapper.find('#input-search');
    const event = {target: { value: '' }};

    inputSearch.simulate('change', event);

    setTimeout(() => {
      const booksFoundState = wrapper.state().booksFound;
      expect(booksFoundState.length).toBe(0);
      done();
    });
  });

  it('should have isSearching state as true while searching for a book', done => {
    const wrapper = mount(<Search {...props}/>);
    const inputSearch = wrapper.find('#input-search');
    const event = {target: { value: 'abc' }};

    inputSearch.simulate('change', event);

    setTimeout(() => {
      const isSearchingState = wrapper.state().isSearching;
      expect(isSearchingState).toBeTruthy();
      done();
    });
  });

  it('has a SearchBar component', () => {
    const wrapper = mount(<Search {...props}/>);
    const searchBarElement = wrapper.find('SearchBar');
    expect(searchBarElement.length).toBe(1);
  });

  it('has a SearchResult component', () => {
    const wrapper = mount(<Search {...props}/>);
    const searchResultElement = wrapper.find('SearchResult');
    expect(searchResultElement.length).toBe(1);
  });
});