import { updatePlaces } from '../../src/reducers/index'
import { UPDATE_PLACES } from '../../src/actions/index';

describe('updatePlaces reducer', () => {
  it('should return initial state', () => {
    expect(
      updatePlaces(undefined, {})
    ).to.eql([]);
  });
  it('should handle UPDATE_PLACES', () => {
    expect(
      updatePlaces([], {
        type: UPDATE_PLACES,
        payload: 'San Francisco',
      })
    ).to.equal('San Francisco');
    expect(
      updatePlaces('San Francisco', {
        type: UPDATE_PLACES,
        payload: 'Oakland',
      })
    ).to.equal('Oakland');
  });
});
