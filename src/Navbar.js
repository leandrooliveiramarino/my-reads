import React from 'react';
import NavbarButtons from './NavbarButtons';

const Navbar = () => (
  <nav className='navbar navbar-expand-lg navbar-absolute fixed-top'>
    <div className='container-fluid'>
      <NavbarButtons/>
    </div>
  </nav>
);

export default Navbar;