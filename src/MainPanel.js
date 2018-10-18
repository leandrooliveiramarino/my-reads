import React from 'react';
import StatusCard from './StatusCard';
import NavbarNav from './NavbarNav';
import NavbarWrapper from './NavbarWrapper';

const MainPanel = (props) => (
  <div className='main-panel'>
    <nav className='navbar navbar-expand-lg navbar-absolute fixed-top'>
      <div className='container-fluid'>
        <NavbarWrapper/>
        <NavbarNav/>
      </div>
    </nav>
    <div className='content'>
      <StatusCard/>
    </div>
  </div>
)

export default MainPanel;