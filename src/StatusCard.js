import React from 'react';

const StatusCard = () => (
  <div className='card card-nav-tabs'>
    <div className='card-header card-header-primary'>
      <h5>Reading</h5>
    </div>
    <div className='card-body'>
      <div className='book'>
        <div className='book__image'>
          <img
            src='http://books.google.com/books/content?id=mDzDBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'/>
          <div className='book__share'>
            <i class="nc-icon nc-share-66"></i>
          </div>
        </div>
        <div className='book__description'>
        Eloquent JavaScript, 2nd Ed.
        </div>
      </div>
    </div>
    <hr/>
  </div>
);

export default StatusCard;