import React from 'react';
import Book from './Book';

const SearchResult = () => (
  <div className='row justify-content-md-center search-result'>
    <div className='col-sm-12 text-center'>
      <Book/>
      <Book/>
    </div>
  </div>
);

export default SearchResult;