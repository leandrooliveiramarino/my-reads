import React, { Component } from 'react';
import Sidebar from './Sidebar';
import MainPanel from './MainPanel';
import './Style.css';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Sidebar/>
        <MainPanel/>
      </div>
    );
  }
}

export default App;
