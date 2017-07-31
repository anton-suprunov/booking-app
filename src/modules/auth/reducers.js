import { combineReducers } from 'redux';
import { LOGIN } from './actions';

const isAuthentificated = (state = false, action) => {
  switch (action.type) {
  case LOGIN:
    return true;
  default:
    return state;
  }
};

export default combineReducers({
  isAuthentificated,
});