import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import isEmail from 'validator/lib/isEmail';
/*import { 
  Field, 
  Form,
  actions as formActions, 
} from 'react-redux-form';*/

import RaisedButton from 'material-ui/RaisedButton';

import Snack from '../../../components/Snack';
import { create } from '../actions';
import TextInput from '../../../components/TextInput';
import * as selectors from '../selectors';

import styles from '../styles.css';

const UserForm = ({ hasErrored, handleSubmit, onSubmit }) => {
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
          />          
        </label>

        <label className={styles.label} htmlFor="password">
          <Field
            name="password"
            type="password"
            label="Password"
            fullWidth={true}
            component={TextInput}
          />
        </label>

        <label className={styles.label} htmlFor="password">
          <Field
            name="password2"
            type="password"
            label="Confirm password"
            fullWidth={true}
            component={TextInput}
          />          
        </label>

        <RaisedButton 
          type="submit"
          label="Add User" 
          primary={true}
          className={styles.submit} 
        />
      </form>

      <Snack 
        open={false}
        message="Something is wrong"
      />
    </div>
  );
};

UserForm.propTypes = {
  hasErrored: PropTypes.bool,
  dispatch: PropTypes.func,
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
};

export { UserForm };

const mapState = state => ({
  //isAuthentificated: isAuthentificated(state),
});

const mapDispatch = (dispatch, { history }) => {
  return {
    create,
    onSubmit: (values) => {
      console.log(values);
      // dispatch
    },
  };
};

export default connect(mapState, mapDispatch)(
  reduxForm({
    form: 'users',
  })(UserForm)
);