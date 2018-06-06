import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
//import RaisedButton from 'material-ui/RaisedButton';
//import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import People from 'material-ui/svg-icons/social/people';
import DateRange from 'material-ui/svg-icons/action/date-range';
import Lock from 'material-ui/svg-icons/action/lock';
import Accessebility from 'material-ui/svg-icons/action/accessibility';
import Dashboard from 'material-ui/svg-icons/action/dashboard';
import Logout from 'material-ui/svg-icons/action/exit-to-app';
import Divider from 'material-ui/Divider';

export default function AppDrawer(props) {
  return (
    <Drawer open={props.open} docked={true}>
      <AppBar
        title='BookingApp'
        //onTitleTouchTap={handleTouchTap}
        showMenuIconButton={false}
        //iconElementLeft={<IconButton><NavigationClose /></IconButton>}
      />
      <MenuItem leftIcon={<Dashboard />}>Главная страница</MenuItem>
      <MenuItem leftIcon={<DateRange />}>Расписание</MenuItem>
      <MenuItem leftIcon={<People />}>Преподаватели</MenuItem>
      <MenuItem leftIcon={<Accessebility />}>Занятия</MenuItem>
      <Divider />
      <MenuItem 
        leftIcon={<Lock />} 
        containerElement={<Link to={'/admins'} />}
        primaryText="Администраторы"
      />
      <MenuItem leftIcon={<Logout />}>Выйти из аккаунта</MenuItem>
    </Drawer>
  );
}

AppDrawer.propTypes = {
  open : PropTypes.bool,
};