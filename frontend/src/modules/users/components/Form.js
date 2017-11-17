import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';

import config from 'config';
import * as validations from 'shared/validations';
import Snack from 'components/Snack';
import { 
  create,
  formLeave,
 } from '../actions';
import TextInput from 'components/TextInput';
import * as selectors from '../selectors';

import styles from '../styles.css';

class UserForm extends Component {
  componentWillUnmount() {
    this.props.onUnmount();
  }

  render() {
    const { hasErrored, handleSubmit, onSubmit, userCreated } = this.props;

    if (userCreated) {
      return <Redirect to={{
        pathname: '/users',
        state: { userCreated: true },
      }} />;
    }

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className={styles.title}>Добавить администратора</h1>
          <label className={styles.label} htmlFor="email">
            <Field
              name="email"
              type="text"
              label="Email"
              fullWidth={true}
              component={TextInput} 
              validate={[ validations.required, validations.isEmail ]}
            />          
          </label>

          <label className={styles.label} htmlFor="password">
            <Field
              name="password"
              type="password"
              label="Password"
              fullWidth={true}
              component={TextInput}
              validate={[ validations.required, validations.minLength5 ]}
            />
          </label>

          <label className={styles.label} htmlFor="password2">
            <Field
              name="password2"
              type="password"
              label="Confirm password"
              fullWidth={true}
              component={TextInput}
              validate={[ 
                validations.required, 
                validations.minLength5, 
                validations.passwordsMatch,
              ]}
            />          
          </label>

          <RaisedButton 
            type="submit"
            label="Add User" 
            primary={true}
            className={styles.submit} 
          />

          <div className={styles.cancel}>
            <FlatButton 
              label="Cancel" 
              secondary={true}
              containerElement={ <Link to="/users" /> }
            />
          </div>
        </form>
      </div>
    );
  }
}

UserForm.propTypes = {
  hasErrored: PropTypes.bool,
  dispatch: PropTypes.func,
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  onUnmount: PropTypes.func,
  userCreated: PropTypes.bool,
};

export { UserForm };

const mapState = state => ({
  userCreated: selectors.userCreated(state),
});

export default connect(mapState, {
  onSubmit: create,
  onUnmount: formLeave,
})(
  reduxForm({
    form: 'users',
  })(UserForm)
);