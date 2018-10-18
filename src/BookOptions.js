import React from 'react';

const BookOptions = (props) => (
  <div className='book__options'>
    <h6 className='text-center book__label'>Status</h6>
    <form className='book__form'>
      <div className='book__status-option'>
        <input
          className='book__value'
          type='radio'
          name='bookStatus'
          id='currentlyReading'
          value='currentlyReading'
        />
        <label
          className='book__status'
          htmlFor='currentlyReading'>
            Currently reading
        </label>
      </div>
      <div className='book__status-option'>
        <input
          className='book__value'
          type='radio'
          name='bookStatus'
          id='wantToRead'
          value='wantToRead'
        />
        <label
          className='book__status'
          htmlFor='wantToRead'>
            Want to read
        </label>
      </div>
      <div className='book__status-option'>
        <input
          className='book__value'
          type='radio'
          name='bookStatus'
          id='read'
          value='read'
        />
        <label
          className='book__status'
          htmlFor='read'>
            Read
        </label>
      </div>
    </form>
  </div>
);

export default BookOptions;