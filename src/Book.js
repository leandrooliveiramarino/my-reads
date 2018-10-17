import React from 'react';

const Book = (props) => (
    <div className='book'>
      <div className='book__image'>
        <div className='book__share book__option'>
          <i className="nc-icon nc-share-66"></i>
        </div>
        <img
          src='http://books.google.com/books/content?id=mDzDBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
          alt='Eloquent JavaScript, 2nd Ed.'/>
        <div className='book__set book__option'>
          <i className="nc-icon nc-settings-gear-65"></i>
        </div>
      </div>
      <div className='book__description'>
      Eloquent JavaScript, 2nd Ed.
      </div>
    </div>
)

export default Book;