import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import { search } from './BooksAPI';

class Search extends Component {

  state = {
    isSearching: false,
    booksFound: [],
    query: ''
  }

  handleOnSearch = ev => {
    const query = ev.target.value.trim();
    //API lança um erro se a busca for feita com string vazia, por isso a tratativa abaixo
    if(!query) {
      this.setState(prevState => ({
        ...this.prevState,
        isSearching: false,
        booksFound: [],
        query: ''
      }))
      return;
    }

    search(query).then((booksFound => {
      console.log(booksFound);
      this.setState(prevState => ({
        ...this.prevState,
        booksFound: booksFound.length ? booksFound : [],
        isSearching: true,
        query
      }))
    }), (err) => {
      this.setState(prevState => ({
        ...this.prevState,
        booksFound: [],
        isSearching: true,
        query
      }))
    });
  }

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
        />
      </React.Fragment>
    )
  }
}

export default Search;