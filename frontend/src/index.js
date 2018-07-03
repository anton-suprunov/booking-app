import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';

injectTapEventPlugin();

import './globals.css';
import Root from './root/Root';

const theme = createMuiTheme();

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Root />
  </MuiThemeProvider>,
  document.getElementById('root')
);