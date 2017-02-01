import { updateFilter } from '../../src/reducers/index'
import { UPDATE_FILTER } from '../../src/actions/index';

describe('updateFilter reducer', () => {
  it('should return initial state', () => {
    expect(
      updateFilter(undefined, {})
    ).to.eql('None');
  });
  it('should handle UPDATE_FILTER', () => {
    expect(
      updateFilter([], {
        type: UPDATE_FILTER,
        payload: 'Price',
      })
    ).to.equal('Price');
    expect(
      updateFilter('Price', {
        type: UPDATE_FILTER,
        payload: 'Ratings',
      })
    ).to.equal('Ratings');
  });
});
