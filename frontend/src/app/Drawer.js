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

import IconButton from '@material-ui/core/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

import PeopleIcon from '@material-ui/icons/People';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LockIcon from '@material-ui/icons/Lock';
import AccessebilityIcon from '@material-ui/icons/Accessibility';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import styles from './app.css';

export default function AppDrawer({
  open,
  onHandleClick,
}) {
  return (
    <Drawer
      classes={{ paper: styles.drawer }}
      open={open}
      variant="persistent"
    >
      <div className={styles.drawerHeader}>
        <IconButton onClick={onHandleClick}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />

      <MenuItem component={props => <Link to={'/'} {...props} />}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText inset primary="Главная страница" />
      </MenuItem>

      <MenuItem>
        <ListItemIcon>
          <DateRangeIcon />
        </ListItemIcon>
        <ListItemText inset primary="Расписание" />
      </MenuItem>

      <MenuItem>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText inset primary="Преподаватели" />
      </MenuItem>

      <MenuItem>
        <ListItemIcon>
          <AccessebilityIcon />
        </ListItemIcon>
        <ListItemText inset primary="Занятия" />
      </MenuItem>

      <Divider />

      <MenuItem component={props => <Link to={'/admins'} {...props} />}>
        <ListItemIcon>
          <LockIcon />
        </ListItemIcon>
        <ListItemText inset primary="Администраторы" />
      </MenuItem>

      <MenuItem>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText inset primary="Выйти из аккаунта" />
      </MenuItem>
    </Drawer>
  );
}

AppDrawer.propTypes = {
  open : PropTypes.bool,
  onHandleClick: PropTypes.func,
};