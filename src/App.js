import React from 'react';
import Sidebar from './Sidebar';
import MainPanel from './MainPanel';
import './Style.css';

const App = (props) => (
    <div className='wrapper'>
      <Sidebar/>
      <MainPanel/>
    </div>
)

export default App;
