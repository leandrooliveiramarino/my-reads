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

  componentDidMount() {
    this.setState(prevState => ({
      ...this.state,
      myBooks: this.myBooks(),
      ...setBooksOnShelves(this.myBooks())
    }))
  }

  myBooks = () => {
    if(!localStorage.isInitialized) {
      localStorage.isInitialized = true;
      return getAll().then((books) => {
        localStorage.myBooks = JSON.stringify(books);
        return books;
      })
    }

    return JSON.parse(localStorage.myBooks);
  }

  onChangeBookChoice = (ev, bookId) => {
    const choice = ev.target.value;

    const myBooks = this.state.myBooks.map((book) => {
      if(book.id === bookId) {
        book.shelf = choice;
        return book;
      }
      return book;
    });

    localStorage.myBooks = JSON.stringify(myBooks);

    this.setState((prevState) => ({
      ...prevState,
      myBooks,
      ...setBooksOnShelves(myBooks)
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
            />
          )} />
        </div>
      </div>
    )
  }
}

export default MainPanel;