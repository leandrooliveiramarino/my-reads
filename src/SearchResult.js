import React, { Component } from 'react';
import Book from './Book';

class SearchResult extends Component {
  render() {
    return (
      <div className='row justify-content-md-center search-result'>
        <div className='col-sm-12 text-center'>
          {
            this.props.booksFound.map(book => {
              /*
                Verificando se o livro já está na prateleira e inserindo devidamente seu status
               */
              const bookOnTheShelf = this.props.myBooks.find((currentBook) => currentBook.id === book.id);
              const status = bookOnTheShelf && bookOnTheShelf.shelf;

              return (
                <Book
                  key={book.id}
                  book={book}
                  status={status}
                  onChangeBookChoice={this.props.onChangeBookChoice}
                  isBookRemovable={this.props.isBookRemovable}
                  showBookShare={false}
                />
              )
            })
          }
          {
            this.props.isSearching && !this.props.booksFound.length && <p><b>No books found</b></p>
          }
          {
            !this.props.booksFound.length &&
              <div className='search-result__available-search-terms'>
                <p>
                  <b>Available search terms: </b>
                  'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
                </p>
              </div>
          }
        </div>
      </div>
    )
  }
}

export default SearchResult;