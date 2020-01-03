//TODO: created admin form submitted with enter without validations
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import withWidth, {
  isWidthUp,
} from '@material-ui/core/withWidth';

import Drawer from './Drawer';
import styles from './app.css';

const Bar = styled(AppBar)`
  transition: transform 218ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: 0 !important;
  position: fixed !important;
  transform: ${props => props.isDrawerOpen ? 'translateX(255px)' : 'none'};
`;

const App = ({ children, location, width }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  useEffect(() => {
    setIsDrawerOpen(isWidthUp('sm', width));
  }, [width]);
  
  const onDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
   
  let title = '';
  if (location.pathname.indexOf('/admins') === 0) {
    title = 'Администраторы';
  }
    
  return (
    <div className="app">
      <Bar isDrawerOpen={isDrawerOpen}>
        <Toolbar>
          <IconButton 
            color="inherit" 
            aria-label="Menu"
            onClick={onDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="title" color="inherit" >
            {title}
          </Typography>
          {/*<Button color="inherit">Login</Button>*/}
        </Toolbar>
      </Bar>
    
      <Drawer 
        open={isDrawerOpen} 
        onHandleClick={onDrawerToggle}
      />

      <div className={classNames({
        [styles.content]: !isDrawerOpen, 
        [styles.contentExpanded]: isDrawerOpen,
      })}>
        {children}
      </div>
    </div>
  );
};

App.propTypes = {
  width: PropTypes.string,
  children: PropTypes.node,
  location: PropTypes.object,
};

export default withRouter(
  withWidth()(App)
);