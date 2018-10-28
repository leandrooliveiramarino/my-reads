import React, { Component } from 'react';
import BookOptions from './BookOptions';
import BookShare from './BookShare';
import { limitCharacters } from './Helper';
import PropTypes from 'prop-types';

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    showBookShare: PropTypes.bool.isRequired,
    status: PropTypes.string,
    onChangeBookChoice: PropTypes.func.isRequired,
    isBookRemovable: PropTypes.bool.isRequired
  };

  constructor() {
    super();
    this.state = {
      showBookShare: false,
      showBookOptions: false
    };
    this.initialState = this.state;
  }

  render() {
    return (
      <div className='book' title={this.props.book.title}>
        <div className='book__image'>
          { /*Na página /search, o compartilhamento de livros não deve aparecer */ }
          {
            this.props.showBookShare &&
              <BookShare
                show={this.state.showBookShare}
                bookName={this.props.book.title}
                status={this.props.status}
                toggleBookChoice={this.toggleBookChoice}
              />
          }
          <BookOptions
            show={this.state.showBookOptions}
            status={this.props.status}
            onChangeBookChoice={this.props.onChangeBookChoice}
            book={this.props.book}
            toggleBookChoice={this.toggleBookChoice}
            isBookRemovable={this.props.isBookRemovable}
          />
          <img
            src={this.props.book.imageLinks && this.props.book.imageLinks.thumbnail}
            alt={this.props.book.title}
            height='169'
            width='128'
          />
        </div>
        <div className='book__description'>
          {limitCharacters(this.props.book.title)}
        </div>
      </div>
    );
  }

  toggleBookChoice = (e, choice) => {
    this.setState(prevState => ({
      ...this.initialState,
      [choice]: !this.state[choice]
    }));
  };
}

export default Book;