import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/styles';

import configureStore from 'store/configureStore';
import PrivateRoute from './PrivateRoute';


import App from 'app/App';
import Auth from 'modules/auth/';
import Admins from 'modules/admins/';
import Teachers from 'modules/teachers/';
import Schedule from 'modules/schedule/';
import GlobalMessage from 'shared/components/GlobalMessage';

import Theme from '../shared/styles/theme';

const store = configureStore();

const Root = () => {
  return (
    <Provider store={store}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={Theme}>
          <Router>
            <Switch>
              <Route path={'/' + Auth.consts.NAME} component={Auth.components.Root} />
              <App>
                {<Switch>
                  <PrivateRoute path={'/' + Teachers.consts.NAME} component={Teachers.components.Root} />
                  <PrivateRoute path={'/' + Admins.consts.NAME} component={Admins.components.Root} />
                  <PrivateRoute path='/' component={Schedule.components.Schedule} />
                </Switch>}
              </App>
            </Switch>
          </Router>
          <GlobalMessage />
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  );
};
Root.propTypes = {
  //store: PropTypes.object,
};

export default Root;