import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Snack from './Snack';
import {
  resetGlobalMessage,
} from '../actions';

class GlobalMessage extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.message && this.props.message.length > 0) { 
      setTimeout(() => {
        this.props.resetGlobalMessage();
      }, 1000);
    }
  }

  render() {
    const {
      message = '',
    } = this.props;
    
    return (
      <React.Fragment>
        <Snack
          open={message !== null && message.length > 0}
          message={message || ''}
        />
      </React.Fragment>
    );
  }
}
GlobalMessage.propTypes = {
  message: PropTypes.string,
  resetGlobalMessage: PropTypes.func,
};

export {
  GlobalMessage,
};

export default connect(state => ({
  message: state.global.globalMessage,
}), {
  resetGlobalMessage,
})(GlobalMessage);