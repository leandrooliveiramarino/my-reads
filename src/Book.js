import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
          <Route render={(props) => (
            <div
              className={`book__share book__option ${props.location.pathname === '/search' && 'hidden'}`}
              onClick={(e) => {
                return this.toggleBookChoice(e, 'showBookShare');
              }}>
              <i className="nc-icon nc-share-66"></i>
            </div>
          )}/>
          <BookShare
            show={this.state.showBookShare}
            bookName={this.props.title}
            status={this.props.status}
          />
          <Route render={(props) => (
            <BookOptions
              show={this.state.showBookOptions}
              status={this.props.status}
              onChangeBookChoice={this.props.onChangeBookChoice}
              book={this.props.book}
              {...props}
            />
          )}/>
          <img
            src={this.props.thumbnail}
            alt={this.props.title}
            height='169'
            width='128'
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
          {limitCharacters(this.props.title)}
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