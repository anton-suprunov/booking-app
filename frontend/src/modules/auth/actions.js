import { AuthLogin } from '../../api/auth';

export const LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const LOGIN_FAIL = 'AUTH_LOGIN_FAIL';

const loginSuccess = (res) => ({
  type: LOGIN_SUCCESS,
  res,
});

const loginFailed = (error) => ({
  type: LOGIN_FAIL,
  error,
});

export const login = (email, password) => dispatch => {
  dispatch({
    type: LOGIN_REQUEST,
  });

  return AuthLogin({ email, password })
    .then(res => dispatch(loginSuccess(res)))
    .catch(error => dispatch(loginFailed(error)));
};