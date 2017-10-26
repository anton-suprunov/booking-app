import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from '../modules/auth';
import users from '../modules/users';

export default combineReducers({
  [auth.consts.NAME]: auth.reducer,
  [users.consts.NAME]: users.reducer,
  form: formReducer,
});