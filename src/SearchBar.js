import React from 'react';

const SearchBar = () => (
  <div className='row justify-content-md-center'>
    <div className='col-sm-6'>
      <div className='input-group'>
        <div className='input-group-prepend'>
          <div className='input-group-text'><i className='nc-icon nc-zoom-split'></i></div>
        </div>
        <input type='text' className='form-control' placeholder='Search' />
      </div>
    </div>
  </div>
);

export default SearchBar;