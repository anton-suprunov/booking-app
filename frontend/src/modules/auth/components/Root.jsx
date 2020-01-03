import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Login from './Login';

const Root = ({ match }) => (
  <Route path={`${match.url}/login`} component={Login} />
);
Root.propTypes = {
  match: PropTypes.object,
};

export default Root;