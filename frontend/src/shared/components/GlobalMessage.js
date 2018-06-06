import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Snack from './Snack';
import {
  resetGlobalMessage,
} from '../actions';

const GlobalMessage = ({ 
  message = null, 
  resetGlobalMessage,
}) => {
  return (
    <React.Fragment>
      <Snack
        open={message && message.length > 0}
        message={message}
      />
    </React.Fragment>
  );
};
GlobalMessage.propTypes = {
  message: PropTypes.string,
  resetGlobalMessage: PropTypes.func,
};

export {
  GlobalMessage,
};

export default connect(state => ({
  //initialValues: selectors.getAdmin(state, ownProps.match.params.adminId),
  message: state.global.globalMessage,
}), {
  resetGlobalMessage,
})(GlobalMessage);