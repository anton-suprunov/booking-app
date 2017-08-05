import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import AppBar from 'material-ui/AppBar';
import withWidth, {LARGE} from 'material-ui/utils/withWidth';

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
    const { children } = this.props;
    console.log(children);
    return (
      <div className="app">
        <AppBar
          className={classNames({
            [styles.bar]: !this.state.drawerOpen, 
            [styles.barExpanded]: this.state.drawerOpen,
          })}
          onLeftIconButtonTouchTap={this.handleDrawerToggle}
          title=""
        />
        
        <Drawer open={this.state.drawerOpen} />

        <div className={classNames({
          [styles.content]: !this.state.drawerOpen, 
          [styles.contentExpanded]: this.state.drawerOpen,
        })}>
          {children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  width: PropTypes.number,
  children: PropTypes.node,
};

export default withWidth()(App);