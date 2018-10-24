import React from 'react';

const BookOptionItem = (props) => {
  return (
    <div className='book__status-option'>
      <input
        className='book__value'
        type='radio'
        name='bookStatus'
        id={`${props.value}-${props.book.id}`}
        value={props.value}
        disabled={props.checkedOption === props.value}
        checked={props.checkedOption === props.value}
        onChange={ev => {
          props.onChangeBookChoice(ev, props.book);
          props.handleBookChoice(ev);
        }}
      />
      <label
        className='book__status'
        htmlFor={`${props.value}-${props.book.id}`}>
          {props.label}
      </label>
    </div>
  );
}

export default BookOptionItem;