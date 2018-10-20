import React from 'react';
import Shelf from './Shelf';
import { Route } from 'react-router-dom';

const Shelves = (props) => (
  <React.Fragment>
    <Route exact path='/' render={() => (
      <React.Fragment>
        {
          props.currentlyReading &&
            <Shelf
              title='Currently reading'
              stateName='currentlyReading'
              showHr={true}
              books={props.currentlyReading}
            />
        }
        {
          props.wantToRead &&
            <Shelf
              title='Want to Read'
              stateName='wantToRead'
              showHr={true}
              books={props.wantToRead}
            />
        }
        {
          props.read &&
            <Shelf
              title='Read'
              stateName='read'
              showHr={false}
              books={props.read}
            />
        }
      </React.Fragment>
    )}/>

    <Route path='/currently-reading' render={() => (
      <Shelf
        title='Currently reading'
        stateName='currentlyReading'
        showHr={false}
        books={props.currentlyReading}
      />
    )}/>

    <Route path='/want-to-read' render={() => (
      <Shelf
        title='Want to read'
        stateName='wantToRead'
        showHr={false}
        books={props.wantToRead}
      />
    )}/>

    <Route path='/read' render={() => (
      <Shelf
        title='Read'
        stateName='read'
        showHr={false}
        books={props.read}
      />
    )}/>

  </React.Fragment>
);

export default Shelves;