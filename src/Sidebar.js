import React from 'react';
import Filter from './Filter';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className='sidebar' data-color='black' data-active-color='danger'>
    <div className='logo text-center'>
      <Link to='/' className='simple-text'>
        My Reads
      </Link>
    </div>
    <div className='sidebar-wrapper'>
      <Filter/>
    </div>
  </div>
);

export default Sidebar;