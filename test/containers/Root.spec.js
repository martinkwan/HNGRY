import React from 'react';
import { shallow } from 'enzyme';
import Root from '../../src/containers/Root';

describe('(Container) Root', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Root />);
  });
  
  it('renders as a function', () => {
    expect(wrapper.type()).to.eql('function');
  });

  it('renders without exploding', () => {
    expect(wrapper).to.have.length(1);
  });
})
