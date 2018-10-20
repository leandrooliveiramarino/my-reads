import React, { Component } from 'react';

class SearchBar extends Component {

  state = {
    query: ''
  }

  render() {
    return (
      <div className='row justify-content-md-center'>
        <div className='col-sm-6'>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <div className='input-group-text'><i className='nc-icon nc-zoom-split'></i></div>
            </div>
            <input
              type='text'
              className='form-control'
              placeholder='Search'
              value={this.state.query}
              onChange={(ev) => {
                this.props.handleOnSearch(ev);
                this.onSearch(ev);
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  onSearch = ev => {
    const query = ev.target.value;
    this.setState(prevState => ({query: query}))
  };
}

export default SearchBar;