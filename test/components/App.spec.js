import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App';

describe('(Component) App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('renders without exploding', () => {
    expect(wrapper).to.have.length(1);
  });
})
