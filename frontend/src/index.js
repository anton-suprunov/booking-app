import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

import './globals.css';
import Root from './root/Root';

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Root />
  </MuiThemeProvider>,
  document.getElementById('root')
);