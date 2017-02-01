import * as actions from '../../src/actions/index';

describe('actions', () => {
  it('should create an action to update location', () => {
    const payload = 'Alameda';
    const expectedAction = {
      type: actions.UPDATE_LOCATION,
      payload,
    };
    expect(actions.updateLocation(payload)).to.eql(expectedAction);
  });
  it('should create an action to update filter', () => {
    const payload = 'Price';
    const expectedAction = {
      type: actions.UPDATE_FILTER,
      payload,
    };
    expect(actions.updateFilter(payload)).to.eql(expectedAction);
  });
  it('should create an action to update places', () => {
    const payload = 'San Francisco';
    const expectedAction = {
      type: actions.UPDATE_PLACES,
      payload,
    };
    expect(actions.updatePlaces(payload)).to.eql(expectedAction);
  });
});
