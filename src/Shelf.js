import React from 'react';
import Book from './Book';

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
            thumbnail={book.imageLinks && book.imageLinks.thumbnail}
            title={book.title}
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

export default Shelf;