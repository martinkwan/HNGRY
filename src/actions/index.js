export const UPDATE_MAP = 'UPDATE_MAP';

export function updateMap(location) {
  return {
    type: UPDATE_MAP,
    payload: location,
  };
}
