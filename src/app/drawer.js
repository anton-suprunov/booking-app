import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
//import RaisedButton from 'material-ui/RaisedButton';
//import classNames from 'classnames';

export default function AppDrawer(props) {
  return (
    <Drawer open={props.open} docked={true}>
      <MenuItem>Menu Item</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
    </Drawer>
  );
}

AppDrawer.propTypes = {
  open : React.PropTypes.bool,
};