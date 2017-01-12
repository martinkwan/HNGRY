import { combineReducers } from 'redux';
import { UPDATE_MAP } from '../actions/index';

const updateMap = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_MAP:
      return action.payload || state;
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  searchLocation: updateMap,
});

export default rootReducer;
