import Login from './components/Login';
import Root from './components/Root';

import * as actions from './actions';
import * as consts from './consts';
import reducer from './reducers';
import * as selectors from './selectors';

export default {
  actions,
  consts, 
  reducer,
  selectors,
  components: {
    Root,
    Login,
  },
};