import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import RaisedButton from 'material-ui/RaisedButton';

import { login } from '../actions';
import TextInput from 'shared/components/TextInput';

import styles from '../auth.css';

const Login = ({ handleSubmit, onSubmit }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <h1 className={styles.title}>Welcome</h1>
      <label className={styles.label} htmlFor="email">
        <Field 
          name="email"
          label="Enter your email"
          fullWidth={true}
          component={TextInput} 
        />
      </label>

      <label className={styles.label} htmlFor="password">
        <Field
          name="password"
          type="password"
          label="Enter your password"
          fullWidth={true}
          component={TextInput} 
        />
      </label>
      <RaisedButton 
        type="submit"
        label="Login" 
        primary={true} 
        className={styles.submit} 
      />  
    </form>
  );
};
Login.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
};

export { Login };

const mapState = state => ({
  isAuthentificated: state.isAuthentificated,
});

const mapDispatch = (dispatch, { history }) => {
  return {
    onSubmit: (values) => {
      console.log(values);
      dispatch(login());
      history.push('/');
    },
  };
};

export default withRouter(
  connect(mapState, mapDispatch)(
    reduxForm({
      form: 'login',
    })(Login)
  )
);

//export default LoginContainer;