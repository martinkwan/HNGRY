import React from 'react';
import { shallow } from 'enzyme';
import ListContainer from '../../src/components/listContainer';

describe('(Component) ListContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ListContainer />);
  });
  it('renders self successfully', () => {
    expect(wrapper).to.have.length(1);
  });
});
