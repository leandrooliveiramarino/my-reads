import React from 'react';

const NavbarNav = (props) => (
  <div className='collapse navbar-collapse justify-content-end' id='navigation'>
    <ul className='navbar-nav'>
      <li className='nav-item'>
        <a className='nav-link btn-rotate' href='/'>
          <p className='search-button'>Search</p>
          <i className='nc-icon nc-simple-add'></i>
          <p>
            <span className='d-lg-none d-md-block'>Add</span>
          </p>
        </a>
      </li>
    </ul>
  </div>
);

export default NavbarNav;