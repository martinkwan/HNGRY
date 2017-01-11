import { combineReducers } from 'redux';
import { UPDATE_MAP } from '../actions/index';

const rootReducer = combineReducers({
  searchLocation: updateMap,
});

export default rootReducer;

function updateMap(state = {}, action) {
  switch (action.type) {
    case UPDATE_MAP:
    console.log('payload',action.payload);
      return action.payload || state;
    default:
      return state;
  }
}
