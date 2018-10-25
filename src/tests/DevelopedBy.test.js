import React from 'react';
import { shallow } from 'enzyme';
import DevelopedBy from '../DevelopedBy';

describe('<DevelopedBy/>', () => {
  it('shallow renders correctly', () => {
    expect(shallow(<DevelopedBy />));
  });
});