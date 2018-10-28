import React, { Component } from 'react';
import BookOptionItem from './BookOptionItem';
import PropTypes from 'prop-types';

class BookOptions extends Component {

  static propTypes = {
    status: PropTypes.string,
    toggleBookChoice: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    book: PropTypes.object.isRequired,
    isBookRemovable: PropTypes.bool.isRequired,
    onChangeBookChoice: PropTypes.func.isRequired
  };

  state = {
    checkedOption: ''
  };

  handleBookChoice = ev => {
    this.setState({
      checkedOption: ev.target.value
    });
  }

  render() {
    const checkedOption = this.state.checkedOption || this.props.status;

    return (
      <React.Fragment>
        <div
          className='book__set book__option'
          onClick={e => {
            return this.props.toggleBookChoice(e, 'showBookOptions');
          }}>
          <i className="nc-icon nc-settings-gear-65"></i>
        </div>
        <div className={`book__options ${this.props.show && 'book__options--active'}`}>
          <h6 className='text-center book__label'>Status</h6>
          <form className='book__form'>
            <BookOptionItem
              book={this.props.book}
              value='currentlyReading'
              onChangeBookChoice={this.props.onChangeBookChoice}
              handleBookChoice={this.handleBookChoice}
              checkedOption={checkedOption}
              label='Currently reading'
            />
            <BookOptionItem
              book={this.props.book}
              value='wantToRead'
              onChangeBookChoice={this.props.onChangeBookChoice}
              handleBookChoice={this.handleBookChoice}
              checkedOption={checkedOption}
              label='Want to read'
            />
            <BookOptionItem
              book={this.props.book}
              value='read'
              onChangeBookChoice={this.props.onChangeBookChoice}
              handleBookChoice={this.handleBookChoice}
              checkedOption={checkedOption}
              label='Read'
            />
            {
              /*
                A opção de remover deve estar visível apenas se estivermos em um caminho diferente de /search
               */
              this.props.isBookRemovable && (
                <BookOptionItem
                  book={this.props.book}
                  value='remove'
                  onChangeBookChoice={this.props.onChangeBookChoice}
                  handleBookChoice={this.handleBookChoice}
                  checkedOption={checkedOption}
                  label='Remove'
                />
              )
            }
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default BookOptions;