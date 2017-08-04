import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';
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

  componentWillReceiveProps(nextProps) {
    if ((this.props.open !== nextProps.open) && (nextProps.open !== this.state.open)) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    const { message } = this.props;
    const { open } = this.state;

    return (
      <Snackbar
        open={open}
        message={message}
        autoHideDuration={3000}
        style={{
          top: 0,
          bottom: 'auto',
          left: (window.innerWidth - 288) / 2,
          transform: open ?
            'translate3d(0, 0, 0)' : 
            'translate3d(0, -50px, 0)',
        }}
        onRequestClose={this.handleClose}
      />
    );
  }
}
Snack.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default Snack;