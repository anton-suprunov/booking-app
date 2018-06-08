//TODO: created admin form submitted with enter without validations
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import withWidth, {LARGE} from 'material-ui/utils/withWidth';

import Drawer from './Drawer';
import GlobalMessage from 'shared/components/GlobalMessage';

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
        drawerOpen: nextProps.width === LARGE,
      });
    }
  }
  
  handleDrawerToggle = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen,
    });
  }

  render() {
    const { children, location } = this.props;
    
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
          onLeftIconButtonTouchTap={this.handleDrawerToggle}
          title={title}
        />
        
        <Drawer open={this.state.drawerOpen} />

        <div className={classNames({
          [styles.content]: !this.state.drawerOpen, 
          [styles.contentExpanded]: this.state.drawerOpen,
        })}>
          {children}

          <GlobalMessage />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  width: PropTypes.number,
  children: PropTypes.node,
  location: PropTypes.object,
};

export default withRouter(
  withWidth()(App)
);