import { combineReducers } from 'redux';

import { 
  CREATE_REQUEST, 
  CREATE_SUCCESS, 
  CREATE_ERROR,

  EDIT_REQUEST,
  EDIT_SUCCESS,
  EDIT_ERROR,

  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
  
  DELETE_SUCCESS,
  FORM_LEAVE,
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