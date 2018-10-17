import React from 'react';
import StatusCard from './StatusCard';

const MainPanel = (props) => (
  <div className='main-panel'>
    <nav className='navbar navbar-expand-lg navbar-absolute fixed-top'>
      <div className='container-fluid'>
        <div className='navbar-wrapper'>
          <div className='navbar-toggle'>
            <button type='button' className='navbar-toggler'>
              <span className='navbar-toggler-bar bar1'></span>
              <span className='navbar-toggler-bar bar2'></span>
              <span className='navbar-toggler-bar bar3'></span>
            </button>
          </div>
        </div>
        <div className='collapse navbar-collapse justify-content-end' id='navigation'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link btn-rotate' href='/'>
                <p className='search-button'>Search</p>
                <i className='nc-icon nc-simple-add'></i>
                <p>
                  <span className='d-lg-none d-md-block'>Add</span>
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className='content'>
      <StatusCard/>
    </div>
  </div>
)

export default MainPanel;