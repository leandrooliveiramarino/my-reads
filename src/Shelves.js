import React from 'react';
import Shelf from './Shelf';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

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
              showHr={false}
              books={props[shelf.status]}
              onChangeBookChoice={props.onChangeBookChoice}
            />
          )}
        />
      ))}
    </div>
  </div>
);

Shelves.propTypes = {
  currentlyReading: PropTypes.array.isRequired,
  wantToRead: PropTypes.array.isRequired,
  read: PropTypes.array.isRequired,
  onChangeBookChoice: PropTypes.func.isRequired,
};

export default Shelves;