import React from 'react';
import { Route } from 'react-router-dom';
import MenuItem from './MenuItem';

const Filter = () => (
  <div className='filter'>
    <div className='text-center'>
      <p className='filter__text'>Filter by</p>
    </div>
    <ul className='nav'>
      <Route
        path='/'
        children={({match}) => (
          <MenuItem
            title='All'
            to='/'
            active={match.isExact}
          />
        )}
      />
      <Route
        path='/currently-reading'
        children={({match}) => (
          <MenuItem
            title='Currently Reading'
            to='/currently-reading'
            active={match}
          />
        )}
      />
      <Route
        path='/want-to-read'
        children={({match}) => (
          <MenuItem
            title='Want to read'
            to='/want-to-read'
            active={match}
          />
        )}
      />
      <Route
        path='/read'
        children={({match}) => (
          <MenuItem
            title='Read'
            to='/read'
            active={match}
          />
        )}
      />
    </ul>
  </div>
);

export default Filter;