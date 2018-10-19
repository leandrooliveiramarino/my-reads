import React from 'react';
import Navbar from './Navbar';
import StatusCards from './StatusCards';

const MainPanel = (props) => (
  <div className='main-panel'>
    <Navbar/>
    <div className='content'>
      <StatusCards/>
    </div>
  </div>
)

export default MainPanel;