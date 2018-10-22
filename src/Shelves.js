import React from 'react';
import Shelf from './Shelf';
import { Route } from 'react-router-dom';

const Shelves = (props) => (
  <div className='row justify-content-md-center'>
    <div className='col-sm-12 text-center'>
      <Route exact path='/' render={() => (
        <React.Fragment>
          {
            props.currentlyReading &&
              <Shelf
                title='Currently reading'
                status='currentlyReading'
                showHr={true}
                books={props.currentlyReading}
                onChangeBookChoice={props.onChangeBookChoice}
              />
          }
          {
            props.wantToRead &&
              <Shelf
                title='Want to Read'
                status='wantToRead'
                showHr={true}
                books={props.wantToRead}
                onChangeBookChoice={props.onChangeBookChoice}
              />
          }
          {
            props.read &&
              <Shelf
                title='Read'
                status='read'
                showHr={false}
                books={props.read}
                onChangeBookChoice={props.onChangeBookChoice}
              />
          }
        </React.Fragment>
      )}/>

      <Route path='/currently-reading' render={() => (
        <Shelf
          title='Currently reading'
          status='currentlyReading'
          showHr={false}
          books={props.currentlyReading}
          onChangeBookChoice={props.onChangeBookChoice}
        />
      )}/>

      <Route path='/want-to-read' render={() => (
        <Shelf
          title='Want to read'
          status='wantToRead'
          showHr={false}
          books={props.wantToRead}
          onChangeBookChoice={props.onChangeBookChoice}
        />
      )}/>

      <Route path='/read' render={() => (
        <Shelf
          title='Read'
          status='read'
          showHr={false}
          books={props.read}
          onChangeBookChoice={props.onChangeBookChoice}
        />
      )}/>
    </div>
  </div>
);

export default Shelves;