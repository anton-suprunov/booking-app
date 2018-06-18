//TODO: created admin form submitted with enter without validations
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

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

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      drawerOpen: true,
    };
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({
        drawerOpen: isWidthUp('sm', nextProps.width),
      });
    }
  }
  
  handleDrawerToggle = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen,
    });
  }

  render() {
    const { 
      children, 
      location, 
    } = this.props;
    
    let title = '';
    if (location.pathname.indexOf('/admins') === 0) {
      title = 'Администраторы';
    }
    
    return (
      <div className="app">
        <AppBar
          className={classNames({
            [styles.bar]: !this.state.drawerOpen, 
            [styles.barExpanded]: this.state.drawerOpen,
          })}
        >
          <Toolbar>
            <IconButton 
              
              color="inherit" 
              aria-label="Menu"
              onClick={this.handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="title" color="inherit" >
              {title}
            </Typography>
            {/*<Button color="inherit">Login</Button>*/}
          </Toolbar>
        </AppBar>
      
        <Drawer 
          open={this.state.drawerOpen} 
          onHandleClick={this.handleDrawerToggle}
        />

        <div className={classNames({
          [styles.content]: !this.state.drawerOpen, 
          [styles.contentExpanded]: this.state.drawerOpen,
        })}>
          {/*children*/}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  width: PropTypes.string,
  children: PropTypes.node,
  location: PropTypes.object,
};

export default withRouter(
  withWidth()(App)
);