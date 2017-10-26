import { AuthLogin } from '../../api/auth';

export const LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const LOGIN_ERROR = 'AUTH_LOGIN_ERROR';

const loginSuccess = (res) => ({
  type: LOGIN_SUCCESS,
  res,
});

const loginError = (res) => ({
  type: LOGIN_ERROR,
  res,
});

export const login = (email, password) => dispatch => {
  dispatch({
    type: LOGIN_REQUEST,
  });

  return AuthLogin({ email, password })
    .then(res => dispatch(loginSuccess(res)))
    .catch(error => dispatch(loginError(error)));
};