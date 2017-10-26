import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import List from './List';
import Form from './Form';

const Root = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/create`} component={Form} />
    <Route path={`${match.url}/edit/:userId`} component={Form} />
    <Route path={`${match.url}`} component={List} />
  </Switch>
);
Root.propTypes = {
  match: PropTypes.object,
};

export default Root;