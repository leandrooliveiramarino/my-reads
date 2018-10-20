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
    booksFound: []
  }

  componentDidMount() {
    this.myBooks().then((books) => {
      this.setState(prevState => ({
        ...this.state,
        ...setBooksOnShelves(books)
      }))
    })
  }

  myBooks() {
    return getAll();
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
            />
          )} />
          <Route path='/search' render={() => (
            <Search
              handleOnSearch={this.handleOnSearch}
              booksFound={this.state.booksFound}
            />
          )} />
        </div>
      </div>
    )
  }

  handleOnSearch = (ev) => {
    //API lança um erro se a busca for feita com string vazia, por isso a tratativa abaixo
    const query = ev.target.value.trim() || ' ';

    search(query).then((booksFound => {
      this.setState((prevState) => ({
        ...this.state,
        booksFound
      }))
    }), (err) => {
      console.error(err);
    });

  }
}

export default MainPanel;