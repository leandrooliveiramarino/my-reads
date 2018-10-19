import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => (
  <Link className='nav-link btn-rotate' to='/'>
    <p className='button'>Back to Home</p>
    <i className='nc-icon nc-minimal-left'></i>
    <p>
      <span className='d-lg-none d-md-block'>Back to Home</span>
    </p>
  </Link>
);

export default HomeButton;