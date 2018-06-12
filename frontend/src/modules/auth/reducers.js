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


export default combineReducers({
  isAuthentificated,
  //hasErrored,
});