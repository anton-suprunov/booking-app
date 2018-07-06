import { combineReducers } from 'redux';

import { 
  CREATE_SUCCESS, 
  EDIT_SUCCESS,
  FETCH_SUCCESS,  
  DELETE_SUCCESS,
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
    return action.admins.reduce((admins, admin) => {
      let newAdmin = { 
        email: admin.username, 
        ...admin, 
      };
      admins[admin._id] = newAdmin;
      return admins;
    }, {});
  }
  
  case DELETE_SUCCESS: {
    let newState = { ...state };
    delete newState[action.id];
    return newState;
  }

  case EDIT_SUCCESS: {
    let newState = { ...state };
    newState[action.res._id] = action.res;
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
    return action.admins.map(admin => admin._id);
  }
  case DELETE_SUCCESS: {
    let newState = state.filter(adminId => adminId !== action.id);
    return newState;
  }
  default: 
    return state;
  }
};

export default combineReducers({
  byId,
  allIds,
});