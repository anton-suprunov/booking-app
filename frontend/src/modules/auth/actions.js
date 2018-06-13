import { 
  AuthLogin,
  AuthJWT,
} from '../../api/auth';

export const LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const LOGIN_ERROR = 'AUTH_LOGIN_ERROR';

const loginSuccess = (res) => ({
  type: LOGIN_SUCCESS,
  res,
});

const loginError = (res) => ({
  type: LOGIN_ERROR,
  message: 'Login details are incorrect',
});

export const login = values => dispatch => {
  dispatch({
    type: LOGIN_REQUEST,
  });

  return AuthLogin(values)
    .then(res => dispatch(loginSuccess(res)))
    .catch(error => dispatch(loginError(error)));
};

export const loginJWT = () => dispatch => {
  return AuthJWT()
    .then(res => dispatch(loginSuccess(res)))
    .catch(error => dispatch(loginError(error)));
};