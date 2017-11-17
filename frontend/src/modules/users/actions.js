//import { AuthLogin } from 'api/auth';
import { 
  fetchUsers, 
  createUser, 
  deleteUser as deleteUserRequest, 
} from 'api/users';
import * as consts  from './consts';

export const CREATE_REQUEST = `${consts.NAME}_CREATE_REQUEST`;
export const CREATE_SUCCESS = `${consts.NAME}_CREATE_SUCCESS`;
export const CREATE_ERROR = `${consts.NAME}_CREATE_ERROR`;

export const FETCH_REQUEST = `${consts.NAME}_FETCH_REQUEST`;
export const FETCH_SUCCESS = `${consts.NAME}_FETCH_SUCCESS`;
export const FETCH_ERROR = `${consts.NAME}_FETCH_ERROR`;

export const DELETE_REQUEST = `${consts.NAME}_DELETE_REQUEST`;
export const DELETE_SUCCESS = `${consts.NAME}_DELETE_SUCCESS`;
export const DELETE_ERROR = `${consts.NAME}_DELETE_ERROR`;

export const FORM_LEAVE = `${consts.NAME}_FORM_LEAVE`;

const createSuccess = (res) => ({
  type: CREATE_SUCCESS,
  res,
});

const createError = (err) => ({
  type: CREATE_ERROR,
  err,
});

export const create = (formValues) => dispatch => {
  dispatch({
    type: CREATE_REQUEST,
  });

  createUser(formValues)
    .then(res => dispatch(createSuccess(res)))
    .catch(err => dispatch(createError(err)));
};

const fetchSuccess = (res) => ({
  type: FETCH_SUCCESS,
  users: res.users,
});

const fetchError = (err) => ({
  type: FETCH_ERROR,
  err,
});

export const fetch = () => dispatch => {
  dispatch({
    type: FETCH_REQUEST,
  });

  fetchUsers()
    .then(res => dispatch(fetchSuccess(res)))
    .catch(err => dispatch(fetchError(err)));
};

const deleteSuccess = (res) => ({
  type: DELETE_SUCCESS,
  id: res.id,
});

const deleteError = (err) => ({
  type: DELETE_ERROR,
  err,
});

export const deleteUser = (id) => dispatch => {
  dispatch({
    type: DELETE_REQUEST,
  });

  deleteUserRequest(id)
    .then(res => dispatch(deleteSuccess(res)))
    .catch(err => dispatch(deleteError(err)));
};

export const formLeave = () => ({
  type: FORM_LEAVE,
});