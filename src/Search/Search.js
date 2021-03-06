import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import * as BooksAPI from '../utils/BooksAPI';
import PropTypes from 'prop-types';

class Search extends Component {

  static propTypes = {
    onChangeBookChoice: PropTypes.func.isRequired,
    myBooks: PropTypes.array.isRequired,
    isBookRemovable: PropTypes.bool.isRequired
  };

  state = {
    isSearching: false,
    booksFound: [],
    query: ''
  };

  handleOnSearch = ev => {
    const query = ev.target.value.trim();
    /*
      Se query estiver vazio, não há necessidade de fazer um disparo na API
     */
    if(!query) {
      this.setState(prevState => ({
        ...this.prevState,
        isSearching: false,
        booksFound: []
      }));
      return;
    }

    BooksAPI.search(query).then((booksFound => {
      this.setState(prevState => ({
        ...this.prevState,
        booksFound: booksFound.length ? booksFound : [],
        isSearching: true,
        query
      }));
    }), (err) => {
      this.setState(prevState => ({
        ...this.prevState,
        booksFound: [],
        isSearching: true
      }));
    });
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar
          handleOnSearch={this.handleOnSearch}
        />
        <SearchResult
          booksFound={this.state.booksFound}
          isSearching={this.state.isSearching}
          onChangeBookChoice={this.props.onChangeBookChoice}
          myBooks={this.props.myBooks}
          isBookRemovable={this.props.isBookRemovable}
        />
      </React.Fragment>
    );
  }
}

export default Search;