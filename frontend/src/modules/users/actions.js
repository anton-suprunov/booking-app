//import { AuthLogin } from '../../api/auth';

export const CREATE_REQUEST = 'USER_CREATE_REQUEST';
export const CREATE_SUCCESS = 'USER_CREATE_SUCCESS';
export const CREATE_ERROR = 'USER_CREATE_ERROR';

const createSuccess = (res) => ({
  type: CREATE_SUCCESS,
  res,
});

const createError = (res) => ({
  type: CREATE_ERROR,
  res,
});

export const create = (email, password) => dispatch => {
  dispatch({
    type: CREATE_REQUEST,
  });

  /*return AuthLogin({ email, password })
    .then(res => dispatch(loginSuccess(res)))
    .catch(error => dispatch(loginError(error)));
  */
};