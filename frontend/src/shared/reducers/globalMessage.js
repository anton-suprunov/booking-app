import {
  ERROR_MESSAGE_RESET,
} from '../actions';

export const globalMessage = (state = null, action) => {
  if (action.type === ERROR_MESSAGE_RESET) {
    return null;
  }

  if (action.message) {
    return action.message;
  }

  return state;
};