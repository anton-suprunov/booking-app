import {
  ERROR_MESSAGE_RESET,
} from '../actions';

import Admins from 'modules/admins';

export const globalMessage = (state = null, action) => {
  switch(action.type) {
  case Admins.actions.CREATE_ERROR: {
    console.log(action);
    return action.err.response.data.message;
  }

  case ERROR_MESSAGE_RESET: {
    return state;
  }

  default: 
    return state;
  }
};