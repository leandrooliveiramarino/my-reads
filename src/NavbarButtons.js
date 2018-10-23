import React from 'react';
import LinkButton from './LinkButton';
import NavbarWrapper from './NavbarWrapper';

const NavbarButtons = props => (
  <React.Fragment>
    <NavbarWrapper/>
    <button
      className='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navigation'
      aria-controls='navigation-index'
      aria-expanded='false'
      aria-label='Toggle navigation'
    >
      <span className='navbar-toggler-bar navbar-kebab'></span>
      <span className='navbar-toggler-bar navbar-kebab'></span>
      <span className='navbar-toggler-bar navbar-kebab'></span>
    </button>
    <div
      className='collapse navbar-collapse justify-content-end'
      id='navigation'
    >
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <LinkButton {...props}/>
        </li>
      </ul>
    </div>
  </React.Fragment>
);

export default NavbarButtons;