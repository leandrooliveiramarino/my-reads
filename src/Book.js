import React from 'react';
import BookOptions from './BookOptions';

const Book = (props) => (
    <div className='book'>
      <div className='book__image'>
        <div className='book__share book__option'>
          <i className="nc-icon nc-share-66"></i>
        </div>
        <BookOptions/>
        <img
          src='http://books.google.com/books/content?id=mDzDBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
          alt='Eloquent JavaScript, 2nd Ed.'
        />
        <div className='book__set book__option' onClick={toggleBookOption}>
          <i className="nc-icon nc-settings-gear-65"></i>
        </div>
      </div>
      <div className='book__description'>
      Eloquent JavaScript, 2nd Ed.
      </div>
    </div>
)

const toggleBookOption = (e) => {
  const ACTIVE_CLASS_NAME = 'book__options--active';
  const element = e.target;
  const bookElement = element.closest('.book');

  if(!bookElement) {
    return;
  }

  const bookOptions = bookElement.querySelector('.book__options');

  if(!bookOptions) {
    return;
  }

  bookOptions.classList.contains(ACTIVE_CLASS_NAME)
    ? bookOptions.classList.remove(ACTIVE_CLASS_NAME)
    : bookOptions.classList.add(ACTIVE_CLASS_NAME);
}

export default Book;