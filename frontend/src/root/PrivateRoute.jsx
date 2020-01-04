import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Auth from '../modules/auth/';

const redirectTo = '/auth/login';

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.isAuthentificated) {
      this.props.loginJWT();
    }
  }

  render() {
    const { 
      component, 
      isAuthentificated, 
      hasErrored,
      ...props 
    } = this.props;
    
    return <Route component={component} {...props} />;

    /*return (
      <React.Fragment>
        { isAuthentificated && <Route component={component} {...props} /> }
        { hasErrored && <Redirect 
          to={{
            pathname: redirectTo, 
            state: {from: props.location},
          }} 
        />
        }
      </React.Fragment>
    );*/
  }
}
PrivateRoute.propTypes = {
  component: PropTypes.func || PropTypes.node,
  isAuthentificated: PropTypes.bool,
  hasErrored: PropTypes.bool,
  location: PropTypes.object,
  loginJWT: PropTypes.func,
};

const mapState = state => ({
  isAuthentificated: Auth.selectors.isAuthentificated(state),
  hasErrored: Auth.selectors.hasErrored(state),
});

export default connect(mapState, {
  loginJWT: Auth.actions.loginJWT,
})(PrivateRoute);