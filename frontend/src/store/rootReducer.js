import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import global from '../shared/reducers';
import auth from '../modules/auth';
import admins from '../modules/admins';

export default combineReducers({
  global,
  [auth.consts.NAME]: auth.reducer,
  [admins.consts.NAME]: admins.reducer,
  form: formReducer,
});