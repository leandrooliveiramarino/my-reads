import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchResult from '../SearchResult';

const books = [
  {
    "title":"The Linux Command Line",
    "imageLinks":{
       "smallThumbnail":"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    },
    "id":"nggnmAEACAAJ",
    "shelf":"currentlyReading"
  },
  {
    "title":"Learning Web Development with React and Bootstrap",
    "imageLinks":{
       "smallThumbnail":"http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
       "thumbnail":"http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    "id":"sJf1vQAACAAJ",
    "shelf":"red"
  },
  {
    "title":"The Cuckoo's Calling",
    "imageLinks":{
       "smallThumbnail":"http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
       "thumbnail":"http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "id":"evuwdDLfAyYC",
    "shelf":"wantToRead"
  }
];

describe('<SearchResult/>', () => {

  const props = {
    booksFound: books,
    onChangeBookChoice: jest.fn(),
    isBookRemovable: true,
    myBooks: [books[0], books[1]],
    isSearching: false
  }

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