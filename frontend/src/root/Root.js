import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
} from 'react-router-dom';

import configureStore from './configureStore';
import PrivateRoute from './PrivateRoute';
import Auth from '../modules/auth/';
import App from '../modules/app/App';

const store = configureStore();

class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path={'/' + Auth.consts.NAME} component={Auth.components.Root} />
            <PrivateRoute 
              path="/" 
              component={App}
              redirectTo='/auth/login'
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
Root.propTypes = {
  //store: PropTypes.object,
};

export default Root;