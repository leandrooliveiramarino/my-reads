import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import MainPanel from '../Main/MainPanel';
import '../style/Style.css';

const App = () => (
  <div className='wrapper'>
    <Route
      path='/'
      component={Sidebar}
    />
    <Route
      path='/'
      render={props => <MainPanel {...props}/>}
    />
  </div>
);

export default App;
