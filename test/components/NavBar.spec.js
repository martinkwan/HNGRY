import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../../src/components/navBar';

describe('(Component) NavBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });
  it('renders self successfully', () => {
    expect(wrapper).to.have.length(1);
  });
});
