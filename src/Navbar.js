import React from 'react';
import { Route } from 'react-router-dom';
import NavbarButtons from './NavbarButtons';

const Navbar = () => (
  <nav className='navbar navbar-expand-lg navbar-absolute fixed-top navbar-fixed-color'>
    <div className='container-fluid'>
      <Route path='/' component={NavbarButtons} />
    </div>
  </nav>
);

export default Navbar;