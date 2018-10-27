import React from 'react';
import { shallow, mount } from 'enzyme';
import Shelf from '../Shelf';

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

describe('<Shelf/>', () => {

  const props = {
    books: books,
    onChangeBookChoice: jest.fn(),
    status: 'read',
    title: 'Read',
    showHr: false
  }

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