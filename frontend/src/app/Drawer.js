import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import classnames from 'classnames';


import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import PeopleIcon from '@material-ui/icons/People';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LockIcon from '@material-ui/icons/Lock';
import AccessebilityIcon from '@material-ui/icons/Accessibility';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import styles from './app.css';

const muiStyles = theme => ({
  drawerHeader: {
    ...theme.mixins.toolbar,
  },
});

const MenuLink = ({
  linkTo,
  title,
  icon = null,
}) => (
  <MenuItem component={props => <Link to={linkTo} {...props} />}>
    <ListItemIcon>
      {icon}
    </ListItemIcon>
    <ListItemText inset primary={title} />
  </MenuItem>
);
MenuLink.propTypes = {
  linkTo: PropTypes.string,
  icon: PropTypes.object,
  title: PropTypes.string,
};

const AppDrawer = ({
  open,
  onHandleClick,
  classes,
}) => {
  return (
    <Drawer
      classes={{ paper: styles.drawer }}
      open={open}
      variant="persistent"
    >
      <div 
        className={classnames(styles.drawerHeader, classes.drawerHeader)}
      >
        <IconButton onClick={onHandleClick}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />

      <MenuLink 
        linkTo="/"
        title={'Главная страница'}
        icon={<DashboardIcon />}
      />

      <MenuLink
        linkTo="/"
        title={'Расписание'}
        icon={<DateRangeIcon />}
      />

      <MenuLink
        linkTo="/"
        title={'Преподаватели'}
        icon={<PeopleIcon />}
      />

      <MenuLink
        linkTo="/"
        title={'Занятия'}
        icon={<AccessebilityIcon />}
      />

      <Divider />

      <MenuLink
        linkTo="/admins"
        title={'Администраторы'}
        icon={<LockIcon />}
      />

      <MenuLink
        linkTo="/"
        title={'Выйти из аккаунта'}
        icon={<LogoutIcon />}
      />
    </Drawer>
  );
};
AppDrawer.propTypes = {
  open: PropTypes.bool,
  onHandleClick: PropTypes.func,
  classes: PropTypes.object,
};

export default withStyles(muiStyles, { withTheme: true })(AppDrawer);