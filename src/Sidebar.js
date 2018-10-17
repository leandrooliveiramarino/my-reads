import React from 'react';

const Sidebar = (props) => (
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
)

export default Sidebar;