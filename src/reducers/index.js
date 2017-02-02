import { combineReducers } from 'redux';
import { UPDATE_LOCATION, UPDATE_FILTER, UPDATE_PLACES } from '../actions/index';

export const updateLocation = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_LOCATION:
      return action.payload || state;
    default:
      return state;
  }
};

export const updatePlaces = (state = [], action) => {
  switch (action.type) {
    case UPDATE_PLACES:
      return action.payload || state;
    default:
      return state;
  }
};

export const updateFilter = (state = 'None', action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return action.payload || state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  location: updateLocation,
  places: updatePlaces,
  filter: updateFilter,
});

export default rootReducer;
