import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

import People from '@material-ui/icons/People';
import DateRange from '@material-ui/icons/DateRange';
import Lock from '@material-ui/icons/Lock';
import Accessebility from '@material-ui/icons/Accessibility';
import Dashboard from '@material-ui/icons/Dashboard';
import Logout from '@material-ui/icons/ExitToApp';

export default function AppDrawer(props) {
  return (
    <Drawer open={props.open} docked={true}>
      <AppBar>
        <Toolbar>
          <Typography variant="title" color="inherit" >
            BookingApp
          </Typography>
        </Toolbar>
      </AppBar>

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