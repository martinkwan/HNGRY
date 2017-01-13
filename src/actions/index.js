export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const UPDATE_FILTER = 'UPDATE_FILTER';
export const UPDATE_PLACES = 'UPDATE_PLACES';

export function updateLocation(location) {
  return {
    type: UPDATE_LOCATION,
    payload: location,
  };
}

export function updateFilter(filter) {
  return {
    type: UPDATE_FILTER,
    payload: filter,
  };
}

export function updatePlaces(places) {
  return {
    type: UPDATE_PLACES,
    payload: places,
  };
}
