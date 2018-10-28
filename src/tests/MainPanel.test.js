import React from 'react';
import { shallow, mount } from 'enzyme';
import MainPanel from '../MainPanel';
import Search from '../Search';
import { MemoryRouter } from 'react-router';
import { Route } from 'react-router-dom';

jest.mock('../BooksAPI');

const shelfBooks = {
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

const myBooks = [
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
    "shelf":"read"
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

const booksFound = [
  {
    "title":"The Linux Command Line 2",
    "imageLinks":{
       "smallThumbnail":"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    },
    "id":"nggnmAEACAAJ2"
  },
  {
    "title":"Learning Web Development with React and Bootstrap",
    "imageLinks":{
       "smallThumbnail":"http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
       "thumbnail":"http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    "id":"sJf1vQAACAAJ",
    "shelf":"read"
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

describe('<MainPanel/>', () => {

  const initialState = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
    myBooks: [],
    fetching: true
  }

  it('shallow renders correctly', () => {
    expect(shallow(<MainPanel />));
  });

  it('should load initial state', () => {
    const wrapper = shallow(<MainPanel/>);
    expect(wrapper.state()).toEqual(initialState);
  });

  it('shows a Navbar component', () => {
    const wrapper = shallow(<MainPanel/>);
    const navbarComponent = wrapper.find('Navbar');
    expect(navbarComponent.length).toBe(1);
  });

  it('shows a loading icon if pathname is / and localStorage is empty', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Route render={(props) => (<MainPanel {...props}/>)}/>
      </MemoryRouter>
    );
    const loading = wrapper.find('.loading-icon');
    expect(loading.length).toBe(1);
  });

  it('shows three shelves if pathname is / and is not fetching data', async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Route render={(props) => (<MainPanel {...props}/>)}/>
      </MemoryRouter>
    );

    await wrapper.setState({
      ...initialState,
      fetching: false
    });
    wrapper.update();

    const shelves = wrapper.find('Shelf');
    expect(shelves.length).toBe(3);
  });

  it('shows a search component if pathname is /search and is not fetching data', async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route render={props => (<MainPanel {...props}/>)}/>
      </MemoryRouter>
    );

    await wrapper.setState({
      ...initialState,
      fetching: false
    });
    wrapper.update();
    const searchComponent = wrapper.find('Search');

    expect(searchComponent.length).toBe(1);
  });

  it('removes book from shelf when clicked in remove radio button', async done => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Route render={(props) => (<MainPanel {...props}/>)}/>
      </MemoryRouter>
    );
    const mainPanelComponent = wrapper.find('MainPanel').first();
    await mainPanelComponent.setState({
      ...initialState,
      currentlyReading: shelfBooks.currentlyReading,
      wantToRead: shelfBooks.wantToRead,
      read: shelfBooks.read,
      myBooks,
      fetching: false
    });

    await mainPanelComponent.update();

    const removeButton = wrapper.find('.book__value[value="remove"]').first();
    const event = {
      target: {
        value: 'remove'
      }
    };

    removeButton.simulate('change', event);

    setTimeout(() => {
      const currentlyReading = mainPanelComponent.state().currentlyReading;
      expect(mainPanelComponent.state('currentlyReading').length).toBe(0);
      done();
    });
  });

  it('update book\'s shelf when clicked on target shelf radio button', async done => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Route render={(props) => (<MainPanel {...props}/>)}/>
      </MemoryRouter>
    );
    const mainPanelComponent = wrapper.find('MainPanel').first();
    await mainPanelComponent.setState({
      ...initialState,
      currentlyReading: shelfBooks.currentlyReading,
      wantToRead: shelfBooks.wantToRead,
      read: shelfBooks.read,
      myBooks,
      fetching: false
    });

    await mainPanelComponent.update();

    const currentlyReadingButton = wrapper.find('.book__value[value="currentlyReading"]').first(); //
    const event = {
      target: {
        value: 'read'
      }
    };

    currentlyReadingButton.simulate('change', event);

    setTimeout(() => {
      const currentlyReading = mainPanelComponent.state().currentlyReading;
      expect(mainPanelComponent.state('currentlyReading').length).toBe(0);
      expect(mainPanelComponent.state('read').length).toBe(2);
      done();
    });
  });

  it('update book\'s shelf when clicked on target shelf radio button in /search path', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route render={props => (<MainPanel {...props}/>)}/>
      </MemoryRouter>
    );
    const mainPanelComponent = wrapper.find('MainPanel').first();

    /*
      Configurando estado inicial
     */
    mainPanelComponent.setState({
      ...initialState,
      currentlyReading: shelfBooks.currentlyReading,
      wantToRead: shelfBooks.wantToRead,
      read: shelfBooks.read,
      myBooks,
      fetching: false
    });

    mainPanelComponent.update();

    /*
      Simulando busca com sucesso no componente Search
     */
    const searchComponent = wrapper.find('Search');
    searchComponent.setState({
      isSearching: true,
      booksFound: [booksFound[0], booksFound[2]],
      query: 'The'
    });

    searchComponent.update();

    const firstBookFound = wrapper.find('.book__value').first();
    const event = {
      target: {
        value: 'currentlyReading'
      }
    };
    /*
      Simulando click para adicionar o livro na prateleira 'currentlyReading'
     */
    firstBookFound.simulate('change', event);

    expect(mainPanelComponent.state('currentlyReading').length).toBe(2);
  });

});