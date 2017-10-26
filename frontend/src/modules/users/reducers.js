import { combineReducers } from 'redux';

import { CREATE_REQUEST, CREATE_SUCCESS, CREATE_ERROR } from './actions';

const byId = (state = {}, action) => {
  switch (action.type) {
  case CREATE_SUCCESS: {
    return {
      ...state,
      [action.id]: action.user,
    };
  }
  default:
    return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
  case CREATE_SUCCESS: {
    return [action.id, ...state];
  }
  default: 
    return state;
  }
};

export default combineReducers({
  byId,
  allIds,
});