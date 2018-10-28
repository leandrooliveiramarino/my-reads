import React from 'react';
import { shallow, mount } from 'enzyme';
import BookShare from '../BookShare';

describe('<BookShare/>', () => {
  const toggleBookChoice = jest.fn();
  const props = {
    bookName: 'BookShare Title',
    status: 'read',
    show: true,
    toggleBookChoice: toggleBookChoice
  };

  it('shallow renders correctly', () => {
    expect(shallow(<BookShare {...props}/>));
  });

  it('should have at least one social media available', () => {
    const wrapper = shallow(<BookShare {...props}/>);
    const socialMedias = wrapper.find('.book__social-medias button');

    expect(socialMedias.length).toBeGreaterThan(0);
  });
});