import React from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

const Search = (props) => (
  <React.Fragment>
    <SearchBar
      handleOnSearch={props.handleOnSearch}
    />
    <SearchResult
      booksFound={props.booksFound}
      isSearching={props.isSearching}
      onChangeBookChoice={props.onChangeBookChoice}
      myBooks={props.myBooks}
    />
  </React.Fragment>
);

export default Search;