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
  switch (action.type) {
    case UPDATE_PLACES:
      return action.payload || state;
    case UPDATE_FILTER:
      if (action.payload === 'Ratings') {
        state.sort((a, b) => b.rating - a.rating);
      } else if (action.payload === 'Price') {
        state.sort((a, b) => a.price_level - b.price_level);
      }
      console.log(state, 'state for updatePlaces')
      return Object.assign([], state);
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  searchLocation: updateMap,
  places: updatePlaces,
});

export default rootReducer;
