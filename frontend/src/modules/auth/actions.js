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

export const login = values => dispatch => {
  console.log('>>>');
  dispatch({
    type: LOGIN_REQUEST,
  });

  return AuthLogin(values)
    .then(res => dispatch(loginSuccess(res)))
    .catch(error => dispatch(loginError(error)));
};