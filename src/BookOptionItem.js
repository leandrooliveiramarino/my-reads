import React from 'react';
import PropTypes from 'prop-types';

const BookOptionItem = props => {
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
};

BookOptionItem.propTypes = {
  value: PropTypes.string.isRequired,
  book: PropTypes.object.isRequired,
  checkedOption: PropTypes.string,
  onChangeBookChoice: PropTypes.func.isRequired,
  handleBookChoice: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default BookOptionItem;