import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

import './globals.css';
import App from './app/app';

ReactDOM.render(
   <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <App data='something' data2='something' />
  </MuiThemeProvider>,
  document.getElementById('root')
);