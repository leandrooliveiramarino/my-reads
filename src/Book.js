import React, { Component } from 'react';
import BookOptions from './BookOptions';
import BookShare from './BookShare';
import { limitCharacters } from './Helper';

class Book extends Component {

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
      <div className='book' title={this.props.title}>
        <div className='book__image'>
          { /*Na página /search, o compartilhamento de livros não deve aparecer */ }
          {
            this.props.showBookShare &&
              <BookShare
                show={this.state.showBookShare}
                bookName={this.props.title}
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
            src={this.props.thumbnail}
            alt={this.props.title}
            height='169'
            width='128'
          />
        </div>
        <div className='book__description'>
          {limitCharacters(this.props.title)}
        </div>
      </div>
    );
  }

  toggleBookChoice = (e, choice) => {
    this.setState(prevState => ({
      ...this.initialState,
      [choice]: !this.state[choice]
    }));
  }
}

export default Book;