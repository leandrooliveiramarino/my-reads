import React from 'react';

const BookOptions = (props) => {
  return (
    <div className={`book__options ${props.show && 'book__options--active'}`}>
      <h6 className='text-center book__label'>Status</h6>
      <form className='book__form'>
        <div className='book__status-option'>
          <input
            className='book__value'
            type='radio'
            name='bookStatus'
            id={`currentlyReading-${props.bookId}`}
            value='currentlyReading'
            disabled={props.status === 'currentlyReading'}
            checked={props.status === 'currentlyReading'}
            onChange={(ev) => props.onChangeBookChoice(ev, props.bookId)}
          />
          <label
            className='book__status'
            htmlFor={`currentlyReading-${props.bookId}`}>
              Currently reading
          </label>
        </div>
        <div className='book__status-option'>
          <input
            className='book__value'
            type='radio'
            name='bookStatus'
            id={`wantToRead-${props.bookId}`}
            value='wantToRead'
            disabled={props.status === 'wantToRead'}
            checked={props.status === 'wantToRead'}
            onChange={(ev) => props.onChangeBookChoice(ev, props.bookId)}
          />
          <label
            className='book__status'
            htmlFor={`wantToRead-${props.bookId}`}>
              Want to read
          </label>
        </div>
        <div className='book__status-option'>
          <input
            className='book__value'
            type='radio'
            name='bookStatus'
            id={`read-${props.bookId}`}
            value='read'
            disabled={props.status === 'read'}
            checked={props.status === 'read'}
            onChange={(ev) => props.onChangeBookChoice(ev, props.bookId)}
          />
          <label
            className='book__status'
            htmlFor={`read-${props.bookId}`}>
              Read
          </label>
        </div>
      </form>
    </div>
  )
}

export default BookOptions;