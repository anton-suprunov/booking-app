export const ERROR_MESSAGE_RESET = 'ERROR_MESSAGE_RESET';

export const resetGlobalMessage = () => dispatch => 
  dispatch({
    type: ERROR_MESSAGE_RESET,
  });