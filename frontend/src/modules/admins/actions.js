import { 
  fetchAdmins, 
  createAdmin,
  editAdmin,
  deleteAdmin as deleteAdminRequest, 
} from 'api/admins';
import * as consts  from './consts';

export const CREATE_REQUEST = `${consts.NAME}_CREATE_REQUEST`;
export const CREATE_SUCCESS = `${consts.NAME}_CREATE_SUCCESS`;
export const CREATE_ERROR = `${consts.NAME}_CREATE_ERROR`;

export const EDIT_REQUEST = `${consts.NAME}_EDIT_REQUEST`;
export const EDIT_SUCCESS = `${consts.NAME}_EDIT_SUCCESS`;
export const EDIT_ERROR = `${consts.NAME}_EDIT_ERROR`;

export const FETCH_REQUEST = `${consts.NAME}_FETCH_REQUEST`;
export const FETCH_SUCCESS = `${consts.NAME}_FETCH_SUCCESS`;
export const FETCH_ERROR = `${consts.NAME}_FETCH_ERROR`;

export const DELETE_REQUEST = `${consts.NAME}_DELETE_REQUEST`;
export const DELETE_SUCCESS = `${consts.NAME}_DELETE_SUCCESS`;
export const DELETE_ERROR = `${consts.NAME}_DELETE_ERROR`;

const createSuccess = (res) => ({
  type: CREATE_SUCCESS,
  res,
  message: 'Administrator created successfully',
});

const createError = (err) => ({
  type: CREATE_ERROR,
  message: err,
});

export const create = formValues => dispatch => {
  dispatch({
    type: CREATE_REQUEST,
  });

  return createAdmin(formValues)
    .then(res => dispatch(createSuccess(res)))
    .catch(res => dispatch(createError(res.message)));
};


const editSuccess = res => ({
  type: EDIT_SUCCESS,
  res,
  message: 'Administrator updated successfully',
});

const editError = err => ({
  type: EDIT_ERROR,
  message: err,
});

export const edit = formValues => dispatch => {
  dispatch({
    type: EDIT_REQUEST,
  });

  return editAdmin(formValues)
    .then(res => dispatch(editSuccess(res)))
    .catch(res => dispatch(editError(res.response.data.message)));
};

const fetchSuccess = admins => ({
  type: FETCH_SUCCESS,
  admins,
});

const fetchError = err => ({
  type: FETCH_ERROR,
  err,
});

export const fetch = () => dispatch => {
  dispatch({
    type: FETCH_REQUEST,
  });

  fetchAdmins()
    .then(res => dispatch(fetchSuccess(res)))
    .catch(err => dispatch(fetchError(err)));
};

const deleteSuccess = id => ({
  type: DELETE_SUCCESS,
  id,
  message: 'Administrator deleted successfully',
});

const deleteError = err => ({
  type: DELETE_ERROR,
  err,
});

export const deleteAdmin = id => dispatch => {
  dispatch({
    type: DELETE_REQUEST,
  });

  deleteAdminRequest(id)
    .then(res => dispatch(deleteSuccess(id)))
    .catch(err => dispatch(deleteError(err)));
};