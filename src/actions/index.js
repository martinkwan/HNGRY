export const UPDATE_MAP = 'UPDATE_MAP';
export const UPDATE_FILTER = 'UPDATE_FILTER';

export function updateMap(location) {
  return {
    type: UPDATE_MAP,
    payload: location,
  };
}

export function updateFilter(filter) {
  return {
    type: UPDATE_FILTER,
    payload: filter,
  };
}
