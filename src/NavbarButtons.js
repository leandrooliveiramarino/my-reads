import React from 'react';
import { Route } from 'react-router-dom';
import LinkButton from './LinkButton';
import NavbarWrapper from './NavbarWrapper';

const NavbarButtons = (props) => (
  <React.Fragment>
    <NavbarWrapper/>
    <div className='collapse navbar-collapse justify-content-end' id='navigation'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Route
            exact
            path='/'
            render={() => <LinkButton label='Search' link='/search'/>}
          />
          <Route
            path='/search'
            render={() => <LinkButton label='Back to Home' link='/'/>}
          />
        </li>
      </ul>
    </div>
  </React.Fragment>
);

export default NavbarButtons;