import React from 'react';
import LinkButton from './LinkButton';
import NavbarWrapper from './NavbarWrapper';

const NavbarButtons = (props) => (
  <React.Fragment>
    <NavbarWrapper/>
    <div className='collapse navbar-collapse justify-content-end' id='navigation'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
        {
          document.location.pathname === '/'
            ? <LinkButton label='Search' link='/search' icon='nc-simple-add'/>
            : <LinkButton label='Back to Home' link='/' icon='nc-minimal-left'/>
        }
        </li>
      </ul>
    </div>
  </React.Fragment>
);

export default NavbarButtons;