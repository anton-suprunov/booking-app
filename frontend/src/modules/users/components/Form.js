import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {
  Checkbox,
  TextField,
} from 'redux-form-material-ui';

import config from 'config';
import * as validations from 'shared/validations';
import Snack from 'components/Snack';
import { 
  create,
  edit,
  formLeave,
 } from '../actions';
import TextInput from 'components/TextInput';
import * as selectors from '../selectors';

import styles from '../styles.css';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordsShown: !props.initialValues,
    };
  }
  componentWillUnmount() {
    this.props.onUnmount();
  }

  togglePasswords = () => {
    this.setState({
      passwordsShown: !this.state.passwordsShown,
    });
  }

  validatePasswords = (name, ...args) => {
    let list = [
      validations.required, 
      validations.minLength5,
    ];
    
    if (name === 'password2') {
      list.push(validations.passwordsMatch);
    }
      
    return list.reduce((err, fn) => {
      if (err) {
        return err;
      }
      return fn(...args);
    }, undefined);
  }

  submitForm = (values) => {
    if (this.props.initialValues && this.props.initialValues._id.length) {
      return this.props.edit(values);
    }
    return this.props.create(values);
  }

  render() {
    const { 
      hasErrored, 
      handleSubmit, 
      //onSubmit, 
      create,
      edit,
      userCreated, 
      initialValues,
    } = this.props;

    const editingMode = initialValues && initialValues._id.length > 0;

    if (userCreated) {
      return <Redirect to={{
        pathname: '/users',
        state: { userCreated: true },
      }} />;
    }

    return (
      <div>
        <form onSubmit={handleSubmit(this.submitForm)}>
          <h1 className={styles.title}>{editingMode ? 'Редактировать администратора' : 'Добавить администратора'}</h1>
          <label className={styles.label} htmlFor="email">
            <Field
              name="email"
              type="text"
              hintText="Email"
              fullWidth={true}
              component={TextField} 
              validate={[ 
                validations.required, 
                validations.isEmail, 
              ]}
              disabled={editingMode}
            />          
          </label>

          { editingMode && !this.state.passwordsShown ?
            <a
              href="#"
              onClick={(e) => this.togglePasswords()}
              className={styles.changePassword}
            >
              Change password
            </a> 
            : null
          }
      
          <div className={classnames(styles.passwordsWrap, {
            [styles.passwordsWrapActive]: this.state.passwordsShown,
          })}>
            <label className={styles.label} htmlFor="password">
              <Field
                name="password"
                type="password"
                hintText="Password"
                fullWidth={true}
                component={TextField}
                validate={(...args) => this.validatePasswords('password', ...args)}
              />
            </label>

            <label className={styles.label} htmlFor="password2">
              <Field
                name="password2"
                type="password"
                hintText="Confirm password"
                fullWidth={true}
                component={TextField}
                validate={(...args) => this.validatePasswords('password2', ...args)}
              />          
            </label>
          </div>

          <label className={styles.label} htmlFor="superuser">
            <Field 
              name="superuser" 
              id="superuser"
              label="Super administrator"
              component={Checkbox}
            />
            
          </label>

          <RaisedButton 
            type="submit"
            label={ editingMode ? 'Edit User' : 'Add User' }
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
  initialValues: PropTypes.object,
  create: PropTypes.func,
  edit: PropTypes.func,
};

export { UserForm };

const mapState = (state, ownProps) => ({
  userCreated: selectors.userCreated(state),
  initialValues: selectors.getUser(state, ownProps.match.params.userId), 
});

export default connect(mapState, {
  create,
  edit,
  onUnmount: formLeave,
})(
  reduxForm({
    form: 'userForm',
  })(UserForm)
);