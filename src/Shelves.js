import React from 'react';
import Shelf from './Shelf';
import { Route } from 'react-router-dom';

const Shelves = () => (
  <React.Fragment>
    <Route exact path='/' render={() => (
      <React.Fragment>
        <Shelf title='Currently reading' stateName='currentlyReading' showHr={true}/>
        <Shelf title='Want to read' stateName='wantToRead' showHr={true}/>
        <Shelf title='Read' stateName='read' showHr={false}/>
      </React.Fragment>
    )}/>

    <Route path='/currently-reading' render={() => (
      <Shelf title='Currently reading' stateName='currentlyReading' showHr={false}/>
    )}/>

    <Route path='/want-to-read' render={() => (
      <Shelf title='Want to read' stateName='wantToRead' showHr={false}/>
    )}/>

    <Route path='/read' render={() => (
      <Shelf title='Read' stateName='read' showHr={false}/>
    )}/>

  </React.Fragment>
);



export default Shelves;