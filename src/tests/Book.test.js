import React from 'react';
import { shallow, mount } from 'enzyme';
import Book from '../Book';

describe('<Book/>', () => {

  const props = {
    id: 1,
    book: {
      title: 'Book Title',
      imageLinks: {
        thumbnail: 'path/to/thumbnail'
      }
    },
    status: 'read',
    onChangeBookChoice: jest.fn(),
    isBookRemovable: true,
    showBookShare: true
  };

  it('shallow renders correctly', () => {
    expect(shallow(<Book {...props}/>));
  });

  it('should contain a BookOptions element', () => {
    const wrapper = shallow(<Book {...props}/>);
    const bookOptionElement = wrapper.find('BookOptions');

    expect(bookOptionElement.length).toBe(1);
  });

  it('should contain a BookShare element', () => {
    const wrapper = shallow(<Book {...props}/>);
    const bookShareElement = wrapper.find('BookShare');

    expect(bookShareElement.length).toBe(1);
  });

  it('starts with showBookShare equals to false', () => {
    const wrapper = shallow(<Book {...props}/>);
    const showBookShare = wrapper.state().showBookShare;

    expect(showBookShare).toBeFalsy();
  });

  it('starts with showBookOptions equals to false', () => {
    const wrapper = shallow(<Book {...props}/>);
    const showBookOptions = wrapper.state().showBookOptions;

    expect(showBookOptions).toBeFalsy();
  });

  it('must never have true values at the same time for showBookOptions and showBookShare states', () => {
    const wrapper = mount(<Book {...props}/>);
    const bookOptionButton = wrapper.find('.book__set');
    const bookShareButton = wrapper.find('.book__share');

    /*
      Simulando clique em cada botão que irá reagir nos estados showBookOptions e showBookShare
     */
    bookOptionButton.simulate('click');
    bookShareButton.simulate('click');

    const showBookOptions = wrapper.state().showBookOptions;
    const showBookShare = wrapper.state().showBookShare;
    expect(showBookOptions).not.toBe(showBookShare);
  });

  it('should not render BookShare element if showBookShare is set to false', () => {
    props.showBookShare = false;
    const wrapper = shallow(<Book {...props}/>);
    const showBookShare = wrapper.find('BookShare');

    expect(showBookShare.length).toBe(0);
  });
});