import React from 'react';
import StatusCard from './StatusCard';
import { Route } from 'react-router-dom';

const StatusCards = () => (
  <React.Fragment>
    <Route exact path='/' render={() => (
      <React.Fragment>
        <StatusCard title='Currently reading' stateName='currentlyReading' showHr={true}/>
        <StatusCard title='Want to read' stateName='wantToRead' showHr={true}/>
        <StatusCard title='Read' stateName='read' showHr={false}/>
      </React.Fragment>
    )}/>

    <Route path='/currently-reading' render={() => (
      <StatusCard title='Currently reading' stateName='currentlyReading' showHr={false}/>
    )}/>

    <Route path='/want-to-read' render={() => (
      <StatusCard title='Want to read' stateName='wantToRead' showHr={false}/>
    )}/>

    <Route path='/read' render={() => (
      <StatusCard title='Read' stateName='read' showHr={false}/>
    )}/>

  </React.Fragment>
);



export default StatusCards;