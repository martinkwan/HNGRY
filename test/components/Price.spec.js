import React from 'react';
import { shallow } from 'enzyme';
import Price from '../../src/components/Price';

describe('(Component) Price', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Price />);
  });
  it('renders self successfully', () => {
    expect(wrapper).to.have.length(1);
  });
});
