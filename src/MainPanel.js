import React, { Component } from 'react';
import Navbar from './Navbar';
import { Route } from 'react-router-dom';
import Shelves from './Shelves';
import Search from './Search';
import { search, getAll } from './BooksAPI';
import { setBooksOnShelves } from './Helper';

class MainPanel extends Component {

  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
    booksFound: [],
    myBooks: [],
    isSearching: false
  }

  async componentDidMount() {
    const myBooks = await this.myBooks();
    this.setState(prevState => ({
      ...this.state,
      myBooks,
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

    const isBookMine = this.state.myBooks.find(currentBook => currentBook.id === book.id);
    const myBooks = !isBookMine ? this.state.myBooks.concat(book) : this.state.myBooks;

    const treatedBooks = myBooks.map((currentBook) => {
      if(currentBook.id === book.id) {
        currentBook.shelf = choice;
        return currentBook;
      }
      return currentBook;
    });

    localStorage.myBooks = JSON.stringify(treatedBooks);

    this.setState((prevState) => ({
      ...prevState,
      treatedBooks,
      ...setBooksOnShelves(treatedBooks)
    }));
  }

  handleOnSearch = (ev) => {
    const query = ev.target.value.trim();

    //API lança um erro se a busca for feita com string vazia, por isso a tratativa abaixo
    if(!query) {
      this.setState((prevState) => ({
        ...this.prevState,
        isSearching: false,
        booksFound: []
      }))
      return;
    }

    search(query).then((booksFound => {
      this.setState((prevState) => ({
        ...this.prevState,
        booksFound: booksFound.length ? booksFound : [],
        isSearching: true
      }))
    }), (err) => {
      this.setState((prevState) => ({
        ...this.prevState,
        booksFound: [],
        isSearching: true
      }))
    });
  }

  render() {
    return (
      <div className='main-panel'>
        <Navbar/>
        <div className='content'>
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
            />
          )} />
        </div>
      </div>
    )
  }
}

export default MainPanel;