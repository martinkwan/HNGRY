import React from 'react';
import { shallow } from 'enzyme';
import Root from '../../src/containers/root';

describe('(Container) Root', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Root />);
  });

  it('renders self successfully', () => {
    expect(wrapper).to.have.length(1);
  });
})
