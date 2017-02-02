import React from 'react';
import { shallow } from 'enzyme';
import InfoWindow from '../../src/components/infoWindow';

describe('(Component) InfoWindow', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<InfoWindow />);
  });
  it('renders self successfully', () => {
    expect(wrapper).to.have.length(1);
  });
});
