import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles'; // v1.x

injectTapEventPlugin();

import './globals.css';
import Root from './root/Root';

const theme = createMuiTheme();

ReactDOM.render(
  <MuiThemeProvider muiTheme={theme}>
    <Root />
  </MuiThemeProvider>,
  document.getElementById('root')
);