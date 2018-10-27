import React from 'react';
import Shelf from './Shelf';
import { Route } from 'react-router-dom';

const shelves = [
  {
    title: 'Currently reading',
    status: 'currentlyReading',
    showHr: true,
    path: '/currently-reading'
  },
  {
    title: 'Want to read',
    status: 'wantToRead',
    showHr: true,
    path: '/want-to-read'
  },
  {
    title: 'Read',
    status: 'read',
    showHr: false,
    path: '/read'
  }
]

const Shelves = props => (
  <div className='row justify-content-md-center'>
    <div className='col-sm-12 text-center'>
      {/* Quando estamos na home, mostramos todas as prateleiras*/}
      <Route exact path='/' render={() => (
        shelves.map(shelf => (
          <Shelf
            key={shelf.status}
            title={shelf.title}
            status={shelf.status}
            showHr={shelf.showHr}
            books={props[shelf.status]}
            onChangeBookChoice={props.onChangeBookChoice}
          />
        ))
      )}/>

      {shelves.map(shelf => (
        <Route
          key={shelf.status}
          path={shelf.path}
          render={() => (
            <Shelf
              title={shelf.title}
              status={shelf.status}
              showHr={shelf.showHr}
              books={props[shelf.status]}
              onChangeBookChoice={props.onChangeBookChoice}
            />
          )}
        />
      ))}
    </div>
  </div>
);

export default Shelves;