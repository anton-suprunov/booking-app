import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import {
  TextField,
} from 'redux-form-material-ui';
import {
  Field,
  reduxForm,
} from 'redux-form';


import * as validations from 'shared/validations';
import { login } from '../actions';
import { isAuthentificated } from '../selectors';

import styles from '../auth.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }

  submitForm = (values) => {
    return this.props.login(values);
  }

  render() {
    const { 
      isAuthentificated, 
      handleSubmit,
    } = this.props;
    
    if (isAuthentificated) {
      return <Redirect to="" />;
    }

    return (
      <Paper className={styles.container}>
        <form onSubmit={handleSubmit(this.submitForm)} >
          <h1 className={styles.title}>Welcome</h1>

          <label className={styles.label} htmlFor="email">
            <Field
              name="email"
              type="text"
              label="Your email"
              fullWidth={true}
              component={TextField} 
              validate={[ 
                validations.required, 
                validations.isEmail, 
              ]}
            />
          </label>

          <label className={styles.label} htmlFor="password">
            <Field
              name="password"
              type="password"
              label="Your password"
              fullWidth={true}
              component={TextField}
              //errorText={this.state.errors.password || ''}
              validate={[
                validations.required,
                //validations.minLength5,
              ]}
              //classes={{ FormHelperText: styles.errorField }}
            />
          </label>

          <div className={styles.submit}>
            <Button 
              variant="contained"
              type="submit"
              color="primary">
              Login
            </Button>
          </div>
        </form>

      </Paper>
    );
  }
}
LoginForm.propTypes = {
  login: PropTypes.func,
  isAuthentificated: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export { LoginForm };

const mapState = state => ({
  isAuthentificated: isAuthentificated(state),
});

export default connect(mapState, { 
  login,
})(
  reduxForm({
    form: 'loginForm',
  })(
    LoginForm
  )
);