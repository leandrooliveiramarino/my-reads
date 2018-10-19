import React from 'react';

const BookShare = (props) => {
  return (
    <div className={`book__sharing ${props.show && 'book__sharing--active'}`}>
      <h6 className='text-center book__label'>Share on</h6>
      <div className='book__social-medias'>
        <div className='social-media'>
          <img src='./img/twitter-icon.jpg' alt='Share on Twitter' className='social-media__icon'/>
          <p className='social-media__title'>Twitter</p>
        </div>
      </div>
    </div>
  )
}

export default BookShare;