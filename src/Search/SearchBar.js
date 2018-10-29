import React, { Component } from 'react';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';

class SearchBar extends Component {

  state = {
    query: ''
  };

  handleOnChange = e => {
    const query = e.target.value;
    this.setState(prevState => ({
      query
    }));
  };

  render() {
    return (
      <div className='row justify-content-md-center'>
        <div className='col-sm-6'>
          <div className='input-group input-group-focus'>
            <div className='input-group-prepend'>
              <div className='input-group-text'>
                <i className='nc-icon nc-zoom-split'></i>
              </div>
            </div>
            <DebounceInput
              id='input-search'
              className='form-control'
              placeholder='Search'
              value={this.state.query}
              minLength={1}
              debounceTimeout={300}
              autoFocus
              onChange={e => {
                this.props.handleOnSearch(e);
                this.handleOnChange(e);
              }}
            />
          </div>
        </div>
      </div>
    );
  }

}

SearchBar.propTypes = {
  handleOnSearch: PropTypes.func.isRequired
};

export default SearchBar;