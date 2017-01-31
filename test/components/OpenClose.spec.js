import React from 'react';
import { shallow } from 'enzyme';
import OpenClose from '../../src/components/OpenClose';

describe('(Component) OpenClose', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<OpenClose />);
  });
  it('renders self successfully', () => {
    expect(wrapper).to.have.length(1);
  });
});
