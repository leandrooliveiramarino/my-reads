import React from 'react';
import Book from './Book';
import { Route } from 'react-router-dom';

const StatusCard = (props) => (
  <div className='card card-nav-tabs'>
    <div className='card-header card-header-primary'>
      <h5>Currently reading</h5>
    </div>
    <div className='card-body book-list'>
      <Book/>
    </div>
    <hr/>
  </div>
);

export default StatusCard;