import { combineReducers } from 'redux';
import { UPDATE_MAP, UPDATE_FILTER, UPDATE_PLACES } from '../actions/index';

const updateMap = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_MAP:
      return action.payload || state;
    default:
      return state;
  }
};

const updatePlaces = (state = [], action) => {
  const sortedPlaces = state.slice();
  switch (action.type) {
    case UPDATE_PLACES:
      return action.payload || state;
    case UPDATE_FILTER:
      if (action.payload === 'Ratings') {
        sortedPlaces.sort((a, b) => b.rating - a.rating);
      } else if (action.payload === 'Price') {
        sortedPlaces.sort((a, b) => a.price_level - b.price_level);
      }
      return Object.assign([], sortedPlaces);
    default:
      return state;
  }
};

const updateFilter = (state = false, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return action.payload || state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  searchLocation: updateMap,
  places: updatePlaces,
  filter: updateFilter,
});

export default rootReducer;
