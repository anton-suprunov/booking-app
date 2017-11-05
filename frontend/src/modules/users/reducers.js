import { combineReducers } from 'redux';

import { 
  CREATE_REQUEST, 
  CREATE_SUCCESS, 
  CREATE_ERROR,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
  DELETE_SUCCESS,
  RESET_USER_CREATED,
} from './actions';

const byId = (state = {}, action) => {
  switch (action.type) {
  case CREATE_SUCCESS: {
    return {
      ...state,
      [action.res._id]: action.res,
    };
  }
  case FETCH_SUCCESS: {
    return action.users.reduce((users, user) => {
      users[user._id] = user;
      return users;
    }, {});
  }
  case DELETE_SUCCESS: {
    let newState = { ...state };
    delete newState[action.id];
    return newState;
  }
  default:
    return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
  case CREATE_SUCCESS: {
    return [
      action.res._id,
      ...state,
    ];
  }
  case FETCH_SUCCESS: {
    return action.users.map(user => user._id);
  }
  case DELETE_SUCCESS: {
    return state.filter(user => user._id === action.id);
  }
  default: 
    return state;
  }
};

const userCreated = (state = false, action) => {
  switch (action.type) {
  case CREATE_SUCCESS: 
    return true;
  case CREATE_REQUEST:
  case CREATE_ERROR:
  case RESET_USER_CREATED:
    return false; 
  default:
    return state;
  }
};

export default combineReducers({
  byId,
  allIds,
  userCreated,
});