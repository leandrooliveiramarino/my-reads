import React, { Component } from 'react';

class BookOptions extends Component {

  state = {
    checkedOption: ''
  }

  handleBookChoice = (ev) => {
    this.setState({
      checkedOption: ev.target.value
    })
  }

  render() {
    const checkedOption = this.state.checkedOption || this.props.status;

    return (
      <div className={`book__options ${this.props.show && 'book__options--active'}`}>
        <h6 className='text-center book__label'>Status</h6>
        <form className='book__form'>
          <div className='book__status-option'>
            <input
              className='book__value'
              type='radio'
              name='bookStatus'
              id={`currentlyReading-${this.props.book.id}`}
              value='currentlyReading'
              disabled={checkedOption === 'currentlyReading'}
              checked={checkedOption === 'currentlyReading'}
              onChange={ev => {
                this.props.onChangeBookChoice(ev, this.props.book);
                this.handleBookChoice(ev);
              }}
            />
            <label
              className='book__status'
              htmlFor={`currentlyReading-${this.props.book.id}`}>
                Currently reading
            </label>
          </div>
          <div className='book__status-option'>
            <input
              className='book__value'
              type='radio'
              name='bookStatus'
              id={`wantToRead-${this.props.book.id}`}
              value='wantToRead'
              disabled={checkedOption === 'wantToRead'}
              checked={checkedOption === 'wantToRead'}
              onChange={ev => {
                this.props.onChangeBookChoice(ev, this.props.book);
                this.handleBookChoice(ev);
              }}
            />
            <label
              className='book__status'
              htmlFor={`wantToRead-${this.props.book.id}`}>
                Want to read
            </label>
          </div>
          <div className='book__status-option'>
            <input
              className='book__value'
              type='radio'
              name='bookStatus'
              id={`read-${this.props.book.id}`}
              value='read'
              disabled={checkedOption === 'read'}
              checked={checkedOption === 'read'}
              onChange={ev => {
                this.props.onChangeBookChoice(ev, this.props.book);
                this.handleBookChoice(ev);
              }}
            />
            <label
              className='book__status'
              htmlFor={`read-${this.props.book.id}`}>
                Read
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default BookOptions;