import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import isEqual from 'lodash/isEqual';

class Snack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
    };
  }
  
  handleClose = () => {
    this.setState({ open: false });
  }

  shouldComponentUpdate(nextProps, nextState) {    
    if (!nextState.open) {
      return true;
    }
    
    if (isEqual(this.props, nextProps)) {
      return false;
    }
    
    return true;
  }

  render() {
    const { 
      message = '',
      open = false,
    } = this.props;
    
    return (
      <Snackbar
        open={open}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{message}</span>}
        autoHideDuration={1000}
        onClose={this.handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      />
    );
  }
}
Snack.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default Snack;