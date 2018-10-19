import React from 'react';
import NavbarNav from './NavbarNav';
import NavbarWrapper from './NavbarWrapper';

const Navbar = () => (
  <nav className='navbar navbar-expand-lg navbar-absolute fixed-top'>
    <div className='container-fluid'>
      <NavbarWrapper/>
      <NavbarNav/>
    </div>
  </nav>
);

export default Navbar;