import React from 'react';

const BookShare = (props) => {
  return (
    <div className={`book__sharing ${props.show && 'book__sharing--active'}`}>
      <h6 className='text-center book__label'>Share on</h6>
      <div className='book__social-medias'>
        <button className='social-media' onClick={() => shareOnTwitter(props.bookName, props.status)}>
          <img src='./img/twitter-icon.jpg' alt='Share on Twitter' className='social-media__icon'/>
          <p className='social-media__title'>Twitter</p>
        </button>
      </div>
    </div>
  )
}

const shareOnTwitter = (bookName, status) => {
  const hashtags = [
    'udacity',
    'myReads',
    'project',
    'leandroMarino'
  ];
  const text = {
    currentlyReading: `I'm currently reading the book "${bookName}"`,
    wantToRead: `I want to read the book "${bookName}"`,
    read: `I read the book "${bookName}"`,
  };

  const shareURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text[status])}&hashtags=${hashtags.join(',')}`;
  window.open(shareURL, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0')
}

export default BookShare;