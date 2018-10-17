import React, { Component } from 'react';
import './Style.css';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <div className='sidebar' data-color='black' data-active-color='danger'>
          <div className='logo text-center'>
            <a href='http://www.creative-tim.com' className='simple-text'>
              My Reads
            </a>
          </div>
          <div className='sidebar-wrapper'>
            <div className='filter'>
              <div className='text-center'>
                <p className='filter__text'>Filter by</p>
              </div>
              <ul className='nav'>
                <li className='menu-item active'>
                  <a href='./dashboard.html'>
                    <p>All</p>
                  </a>
                </li>
                <li className='menu-item'>
                  <a href='./dashboard.html'>
                    <p>Reading</p>
                  </a>
                </li>
                <li className='menu-item'>
                  <a href='./dashboard.html'>
                    <p>Want to read</p>
                  </a>
                </li>
                <li className='menu-item'>
                  <a href='./dashboard.html'>
                    <p>Read</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='main-panel' >
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
        </div>
      </div>
    );
  }
}

export default App;
