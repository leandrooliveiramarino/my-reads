import React from 'react';
import { shallow, mount } from 'enzyme';
import Shelves from '../Shelves';
import { MemoryRouter } from 'react-router';
import { Route } from 'react-router-dom';
import { shelfBooks } from './mockData';

describe('<Shelves/>', () => {

  const props = {
    ...shelfBooks(),
    onChangeBookChoice: jest.fn()
  };

  it('shallow renders correctly', () => {
    expect(shallow(<Shelves {...props}/>));
  });

  it('shows three shelves if pathname is /', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Route render={(routeProps) => (<Shelves {...props} {...routeProps}/>)}/>
      </MemoryRouter>
    );
    const shelves = wrapper.find('Shelf');
    expect(shelves.length).toBe(3);
  });

  it('show one shelf if pathname is /read', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/read']}>
        <Route render={(routeProps) => (<Shelves {...props} {...routeProps}/>)}/>
      </MemoryRouter>
    );
    const shelves = wrapper.find('Shelf');
    expect(shelves.length).toBe(1);
  });

  it('show one shelf if pathname is /currently-reading', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/currently-reading']}>
        <Route render={(routeProps) => (<Shelves {...props} {...routeProps}/>)}/>
      </MemoryRouter>
    );
    const shelves = wrapper.find('Shelf');
    expect(shelves.length).toBe(1);
  });

  it('show one shelf if pathname is /want-to-read', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/want-to-read']}>
        <Route render={(routeProps) => (<Shelves {...props} {...routeProps}/>)}/>
      </MemoryRouter>
    );
    const shelves = wrapper.find('Shelf');
    expect(shelves.length).toBe(1);
  });
});