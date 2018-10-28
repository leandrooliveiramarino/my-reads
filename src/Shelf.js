import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const Shelf = props => (
  <div className='card card-nav-tabs'>
    <div className='card-header card-header-primary'>
      <h5>{props.title}</h5>
    </div>
    <div className='card-body book-list'>
      {
        props.books.map(book =>
          <Book
            key={book.id}
            book={book}
            status={props.status}
            onChangeBookChoice={props.onChangeBookChoice}
            isBookRemovable={true}
            showBookShare={true}
          />
        )
      }
      {!props.books.length && <p>There are no books here</p>}
    </div>
    {props.showHr && <hr/>}
  </div>
);

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  onChangeBookChoice: PropTypes.func.isRequired,
  showHr: PropTypes.bool.isRequired
};

export default Shelf;