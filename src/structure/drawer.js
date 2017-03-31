import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import classNames from 'classnames';

import './drawer.scss';

export default class AppDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div>
        <AppBar
          className={classNames('app-bar', {'expanded': this.state.open})}
          onLeftIconButtonTouchTap={this.handleToggle}
          title=""
        />
        <Drawer 
          open={this.state.open}
          docked={true}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        <div className={classNames('app-content', {'expanded': this.state.open})}>
          { this.props.children } 
        </div>
      </div>
    );
  }
}