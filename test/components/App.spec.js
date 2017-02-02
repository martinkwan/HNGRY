import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/app';

describe('(Component) App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('renders self successfully', () => {
    expect(wrapper).to.have.length(1);
  });
})
