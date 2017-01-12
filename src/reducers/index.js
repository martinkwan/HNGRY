import { combineReducers } from 'redux';
import { UPDATE_MAP, UPDATE_FILTER } from '../actions/index';

const updateMap = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_MAP:
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
}


const rootReducer = combineReducers({
  searchLocation: updateMap,
  filter: updateFilter,
});

export default rootReducer;
