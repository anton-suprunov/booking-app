import React from 'react';
import ReactDOM from 'react-dom';

//import HOCSchedule from './schedule/hoc-schedule';
//import Button from './buttons/button';
//import clickableButton from './buttons/button-clickable';
//import NameForm from './module1';

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();
//const ClickableBtn = clickableButton(Button);

import './globals.scss';

import Schedule from './schedule/schedule';
import Drawer from './structure/Drawer';



ReactDOM.render(
   <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Drawer>
      <Schedule />
    </Drawer>
  </MuiThemeProvider>,
  document.getElementById('root')
);