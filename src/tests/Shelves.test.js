import React from 'react';
import { shallow, mount } from 'enzyme';
import Shelves from '../Shelves';
import { MemoryRouter } from 'react-router';
import { Route } from 'react-router-dom';

const books = {
  currentlyReading: [{
    "title":"The Linux Command Line",
    "imageLinks":{
       "smallThumbnail":"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    },
    "id":"nggnmAEACAAJ",
    "shelf":"currentlyReading"
  }],
  read: [{
    "title":"Learning Web Development with React and Bootstrap",
    "imageLinks":{
       "smallThumbnail":"http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
       "thumbnail":"http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    "id":"sJf1vQAACAAJ",
    "shelf":"read"
  }],
  wantToRead: [{
    "title":"The Cuckoo's Calling",
    "imageLinks":{
       "smallThumbnail":"http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
       "thumbnail":"http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "id":"evuwdDLfAyYC",
    "shelf":"wantToRead"
  }]
};

describe('<Shelves/>', () => {

  const props = {
    ...books,
    onChangeBookChoice: jest.fn()
  }

  it('shallow renders correctly', () => {
    expect(shallow(<Shelves {...props}/>));
  });

  it('shows three shelves if pathname is /', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Route render={(routeProps) => (<Shelves {...props} {...routeProps}/>)}/>
      </MemoryRouter>
    );
    const shelves = wrapper.find('Shelf');
    expect(shelves.length).toBe(3);
  });

  it('show one shelf if pathname is /read', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/read']}>
        <Route render={(routeProps) => (<Shelves {...props} {...routeProps}/>)}/>
      </MemoryRouter>
    );
    const shelves = wrapper.find('Shelf');
    expect(shelves.length).toBe(1);
  });

  it('show one shelf if pathname is /currently-reading', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/currently-reading']}>
        <Route render={(routeProps) => (<Shelves {...props} {...routeProps}/>)}/>
      </MemoryRouter>
    );
    const shelves = wrapper.find('Shelf');
    expect(shelves.length).toBe(1);
  });

  it('show one shelf if pathname is /want-to-read', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/want-to-read']}>
        <Route render={(routeProps) => (<Shelves {...props} {...routeProps}/>)}/>
      </MemoryRouter>
    );
    const shelves = wrapper.find('Shelf');
    expect(shelves.length).toBe(1);
  });
});