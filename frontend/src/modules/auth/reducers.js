import { combineReducers } from 'redux';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './actions';

const isAuthentificated = (state = false, action) => {
  switch (action.type) {
  case LOGIN_SUCCESS:
    return true;
  case LOGIN_ERROR: 
    return false;
  default:
    return state;
  }
};

const hasErrored = (state = false, action) => {
  switch (action.type) {
  case LOGIN_REQUEST: 
    return false;
  case LOGIN_ERROR: {
    return true;
  }
  default:
    return state;
  }
};

export default combineReducers({
  isAuthentificated,
  hasErrored,
});