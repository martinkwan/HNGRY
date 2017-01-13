import { combineReducers } from 'redux';
import { UPDATE_LOCATION, UPDATE_FILTER, UPDATE_PLACES } from '../actions/index';

const updateLocation = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_LOCATION:
      return action.payload || state;
    default:
      return state;
  }
};

const updatePlaces = (state = [], action) => {
  switch (action.type) {
    case UPDATE_PLACES:
      return action.payload || state;
    case UPDATE_FILTER:
      if (action.payload === 'Ratings') {
        state.sort((a, b) => b.rating - a.rating);
      } else if (action.payload === 'Price') {
        state.sort((a, b) => a.price_level - b.price_level);
      }
      return Object.assign([], state);
    default:
      return state;
  }
};

const updateFilter = (state = 'None', action) => {
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
