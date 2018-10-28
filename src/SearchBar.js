import React, { Component } from 'react';
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
            <input
              type='text'
              id='input-search'
              className='form-control'
              placeholder='Search'
              value={this.state.query}
              onChange={e => {
                this.props.handleOnSearch(e);
                this.handleOnChange(e);
              }}
              autoFocus
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