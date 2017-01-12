import { combineReducers } from 'redux';
import { UPDATE_MAP, UPDATE_FILTER, UPDATE_PLACES } from '../actions/index';

const updateMap = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_MAP:
    console.log(action.payload,'update map')
      return action.payload || state;
    default:
      return state;
  }
};

const updateFilter = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return action.payload || state;
    default:
      return state;
  }
};

const updatePlaces = (state = [], action) => {
  switch (action.type) {
    case UPDATE_PLACES:
    console.log(action.payload, 'places');
      return action.payload || state;
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  searchLocation: updateMap,
  filter: updateFilter,
  places: updatePlaces,
});

export default rootReducer;
