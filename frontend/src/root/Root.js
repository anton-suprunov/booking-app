import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
} from 'react-router-dom';

import configureStore from '../store/configureStore';
import PrivateRoute from './PrivateRoute';

import App from '../app/App';
import Auth from '../modules/auth/';
import Schedule from '../modules/schedule/';


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
            <App>
              <PrivateRoute path="/" component={Schedule.components.Schedule} />
            </App>
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