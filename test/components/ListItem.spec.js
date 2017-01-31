import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../../src/components/ListItem';

describe('(Component) ListItem', () => {
  let wrapper;
  const props = { place: {} };
  beforeEach(() => {
    wrapper = shallow(<ListItem {...props} />);
  });
  it('renders self successfully', () => {
    expect(wrapper).to.have.length(1);
  });
});
