import React from 'react';
import Navbar from './Navbar';
import { Route } from 'react-router-dom';
import StatusCards from './StatusCards';
import Search from './Search';

const MainPanel = (props) => (
  <div className='main-panel'>
    <Navbar/>
    <div className='content'>
      <Route path='/' component={StatusCards} />
      <Route path='/search' component={Search} />
    </div>
  </div>
)

export default MainPanel;