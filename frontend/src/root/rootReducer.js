import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from '../modules/auth';

export default combineReducers({
  [auth.consts.NAME]: auth.reducer,
  form: formReducer,
});