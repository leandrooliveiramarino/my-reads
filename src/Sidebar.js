import React from 'react';
import MenuItem from './MenuItem';

const Sidebar = (props) => (
  <div className='sidebar' data-color='black' data-active-color='danger'>
    <div className='logo text-center'>
      <a href='http://www.creative-tim.com' className='simple-text'>
        My Reads
      </a>
    </div>
    <div className='sidebar-wrapper'>
      <div className='filter'>
        <div className='text-center'>
          <p className='filter__text'>Filter by</p>
        </div>
        <ul className='nav'>
          <MenuItem
            title='All'
            to='/'
            active={true}
          />
          <MenuItem
            title='Reading'
            to='/reading'
            active={false}
          />
          <MenuItem
            title='Want to read'
            to='/want-to-read'
            active={false}
          />
          <MenuItem
            title='Read'
            to='/read'
            active={false}
          />
        </ul>
      </div>
    </div>
  </div>
)

export default Sidebar;