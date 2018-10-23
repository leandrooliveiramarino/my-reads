import React from 'react';
import Filter from './Filter';
import DevelopedBy from './DevelopedBy';
import { Link } from 'react-router-dom';

const Sidebar = props => (
  <div
    className='sidebar'
    data-color='black'
    data-active-color='danger'
  >
    <div className='logo text-center'>
      <Link
        to='/'
        className='simple-text'
      >
        My Reads
      </Link>
    </div>
    <div className='sidebar-wrapper'>
      {/* Apenas irá apresentar o filter se estiver fora da página /search */}
      {props.location.pathname !== '/search' && <Filter/>}
      <DevelopedBy/>
    </div>
  </div>
);

export default Sidebar;