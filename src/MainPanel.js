import React, { Component } from 'react';
import Navbar from './Navbar';
import { Route } from 'react-router-dom';
import Shelves from './Shelves';
import Search from './Search';
import { getAll } from './BooksAPI';
import { setBooksOnShelves } from './Helper';

class MainPanel extends Component {

  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
    booksFound: [],
    myBooks: [],
    isSearching: false,
    fetching: true,
    query: ''
  }

  async componentDidMount() {
    const myBooks = await this.myBooks();
    this.setState(prevState => ({
      ...this.state,
      myBooks,
      fetching: false,
      ...setBooksOnShelves(myBooks)
    }))
  }

  myBooks = () => {
    if(JSON.parse(!localStorage.isInitialized)) {
      return getAll().then((books) => {
        localStorage.isInitialized = true;
        localStorage.myBooks = JSON.stringify(books);
        return books;
      })
    }

    return JSON.parse(localStorage.myBooks);
  }

  onChangeBookChoice = (ev, book) => {
    const choice = ev.target.value;
    let treatedBooks;

    if(choice === 'remove') {
      treatedBooks = this.removeBookFromShelves(book);
    } else {
      treatedBooks = this.changeOrAddBookOnShelf(choice, book);
    }

    localStorage.myBooks = JSON.stringify(treatedBooks);

    this.setState((prevState) => ({
      ...prevState,
      myBooks: treatedBooks,
      booksFound: [],
      isSearching: false,
      ...setBooksOnShelves(treatedBooks)
    }));

    if(this.props.location.pathname === '/search') {
      this.props.history.push('/');
    }
  }

  removeBookFromShelves = (book) => {
    return this.state.myBooks.filter(currentBook => currentBook.id !== book.id);
  }

  changeOrAddBookOnShelf = (choice, book) => {
    const isBookMine = this.state.myBooks.find(currentBook => currentBook.id === book.id);
    const myBooks = !isBookMine ? this.state.myBooks.concat(book) : this.state.myBooks;

    return myBooks.map((currentBook) => {
      if(currentBook.id === book.id) {
        currentBook.shelf = choice;
        return currentBook;
      }
      return currentBook;
    });
  }

  render() {
    const content = <div className='content'>
      <Route path='/' render={() => (
        <Shelves
          currentlyReading={this.state.currentlyReading}
          wantToRead={this.state.wantToRead}
          read={this.state.read}
          onChangeBookChoice={this.onChangeBookChoice}
        />
      )} />
      <Route path='/search' render={() => (
        <Search
          handleOnSearch={this.handleOnSearch}
          booksFound={this.state.booksFound}
          isSearching={this.state.isSearching}
          onChangeBookChoice={this.onChangeBookChoice}
          myBooks={this.state.myBooks}
          onSearch={this.onSearch}
        />
      )} />
    </div>;
    const loading = <div className='content'>
      <div className='loading'>
        <img src='/img/loading.gif' alt='Loading' className='loading-icon'/>
      </div>
    </div>;

    return (
      <div className='main-panel'>
        <Navbar/>
        {
          this.state.fetching
            ? loading
            : content
        }
      </div>
    )
  }
}

export default MainPanel;