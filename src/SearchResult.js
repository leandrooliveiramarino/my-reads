import React, { Component } from 'react';
import Book from './Book';

class SearchResult extends Component {
  render() {
    return (
      <div className='row justify-content-md-center search-result'>
        <div className='col-sm-12 text-center'>
        {this.props.booksFound.length
          ? this.props.booksFound.map(book =>
              <Book
                key={book.id}
                thumbnail={book.imageLinks && book.imageLinks.thumbnail}
                title={book.title}
              />
            )
          : <p>No books found</p>}
        </div>
      </div>
    )
  }
}

export default SearchResult;