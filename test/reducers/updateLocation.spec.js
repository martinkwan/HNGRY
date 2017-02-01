import { updateLocation } from '../../src/reducers/index'
import { UPDATE_LOCATION } from '../../src/actions/index';

describe('updateLocation reducer', () => {
  it('should return initial state', () => {
    expect(
      updateLocation(undefined, {})
    ).to.eql({});
  });
  it('should handle UPDATE_LOCATION', () => {
    expect(
      updateLocation([], {
        type: UPDATE_LOCATION,
        payload: 'San Francisco',
      })
    ).to.equal('San Francisco');
    expect(
      updateLocation('San Francisco', {
        type: UPDATE_LOCATION,
        payload: 'Oakland',
      })
    ).to.equal('Oakland');
  });
});
