import React from 'react';
import { shallow } from 'enzyme';
import Rating from '../../src/components/Rating';

describe('(Component) Rating', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Rating />);
  });
  it('renders self successfully', () => {
    expect(wrapper).to.have.length(1);
  });
});
