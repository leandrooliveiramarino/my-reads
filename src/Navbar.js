import React from 'react';
import NavbarButtons from './NavbarButtons';
import NavbarWrapper from './NavbarWrapper';

const Navbar = () => (
  <nav className='navbar navbar-expand-lg navbar-absolute fixed-top'>
    <div className='container-fluid'>
      <NavbarWrapper/>
      <NavbarButtons/>
    </div>
  </nav>
);

export default Navbar;