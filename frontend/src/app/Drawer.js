import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { withTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import PeopleIcon from '@material-ui/icons/People';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LockIcon from '@material-ui/icons/Lock';
import AccessebilityIcon from '@material-ui/icons/Accessibility';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const DrawerContainer = styled(Drawer)`
  width: 275px;
  .MuiDrawer-paper { width: 275px; }
`;

const DrawerHeader = styled(withTheme('div'))`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  min-height: 64px;
`;

const MenuLink = ({
  linkTo,
  title,
  icon = null,
}) => (
  <MenuItem component={Link} to={linkTo}>
    <ListItemIcon>{icon}</ListItemIcon>
    <Typography variant="inherit">{title}</Typography>
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
    <DrawerContainer open={open} variant="persistent">
      <DrawerHeader>
        <IconButton onClick={onHandleClick}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />

      <MenuLink 
        linkTo="/"
        title={'Главная страница'}
        icon={<DashboardIcon />}
      />

      <MenuLink
        linkTo="/schedule"
        title={'Расписание'}
        icon={<DateRangeIcon />}
      />

      <MenuLink
        linkTo="/teachers"
        title={'Преподаватели'}
        icon={<PeopleIcon />}
      />

      <MenuLink
        linkTo="/classes"
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
    </DrawerContainer>
  );
};
AppDrawer.propTypes = {
  open: PropTypes.bool,
  onHandleClick: PropTypes.func,
  classes: PropTypes.object,
};

export default AppDrawer;