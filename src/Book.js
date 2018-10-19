import React, { Component } from 'react';
import BookOptions from './BookOptions';
import BookShare from './BookShare';

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
      <div className='book'>
        <div className='book__image'>
          <div
            className='book__share book__option'
            onClick={(e) => {
              return this.toggleBookChoice(e, 'showBookShare');
            }}>
            <i className="nc-icon nc-share-66"></i>
          </div>
          <BookShare show={this.state.showBookShare}/>
          <BookOptions show={this.state.showBookOptions}/>
          <img
            src='http://books.google.com/books/content?id=mDzDBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
            alt='Eloquent JavaScript, 2nd Ed.'
          />
          <div
            className='book__set book__option'
            onClick={(e) => {
              return this.toggleBookChoice(e, 'showBookOptions');
            }}>
            <i className="nc-icon nc-settings-gear-65"></i>
          </div>
        </div>
        <div className='book__description'>
        Eloquent JavaScript, 2nd Ed.
        </div>
      </div>
    );
  }

  toggleBookChoice = (e, choice) => {
    this.setState((prevState) => ({
      ...this.initialState,
      [choice]: !this.state[choice]
    }));
  }
}

export default Book;