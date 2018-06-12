import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import RaisedButton from 'material-ui/RaisedButton';
import {
  TextField,
} from 'redux-form-material-ui';
import {
  Field,
  reduxForm,
} from 'redux-form';
import * as validations from 'shared/validations';

import Snack from 'shared/components/Snack';
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
      <React.Fragment>
        <form onSubmit={handleSubmit(this.submitForm)} className={styles.container}>
          <h1 className={styles.title}>Welcome</h1>

          <label className={styles.label} htmlFor="email">
            <Field
              name="email"
              type="text"
              hintText="Your email"
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
                hintText="Your password"
                fullWidth={true}
                component={TextField}
                //errorText={this.state.errors.password || ''}
                validate={[
                  validations.required,
                  //validations.minLength5,
                ]}
              />
            </label>

          <RaisedButton 
            type="submit"
            label="Login" 
            primary={true} 
            className={styles.submit} 
          />
        </form>

      </React.Fragment>
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