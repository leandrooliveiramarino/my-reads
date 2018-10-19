import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import { Route } from 'react-router-dom';
import StatusCard from './StatusCard';

const MainPanel = (props) => (
  <div className='main-panel'>
    <Navbar/>
    <div className='content'>
      <Route exact path='/' component={StatusCard}/>
      <Route path='/search' component={Search} />
    </div>
  </div>
)

export default MainPanel;