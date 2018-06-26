import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { 
  Field, 
  reduxForm, 
} from 'redux-form';

import { Link } from 'react-router-dom';
import classnames from 'classnames';

import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {
  Checkbox,
  TextField,
} from 'redux-form-material-ui';

import * as validations from 'shared/validations';
import {
  create,
  edit,
  formLeave,
} from '../actions';
import * as selectors from '../selectors';

import styles from '../styles.css';

class AdminForm extends Component {
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
      return this.props.edit(values)
        .then(() => this.props.history.push('/admins'));
    }
    return this.props.create(values)
      .then(() => this.props.history.push('/admins'));
  }

  render() {
    const { 
      hasErrored, 
      handleSubmit, 
      create,
      edit,
      initialValues,
    } = this.props;

    const editingMode = initialValues && initialValues._id.length > 0;

    return (
      <React.Fragment>
        <form onSubmit={handleSubmit(this.submitForm)}>
          <h1 className={styles.title}>{editingMode ? 'Редактировать администратора' : 'Добавить администратора'}</h1>
          <label className={styles.label} htmlFor="email">
            <Field
              name="email"
              type="text"
              label="Email"
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
                label="Password"
                fullWidth={true}
                component={TextField}
                validate={(...args) => this.validatePasswords('password', ...args)}
              />
            </label>

            <label className={styles.label} htmlFor="password2">
              <Field
                name="password2"
                type="password"
                label="Confirm password"
                fullWidth={true}
                component={TextField}
                validate={(...args) => this.validatePasswords('password2', ...args)}
              />          
            </label>
          </div>

          <label className={styles.label} htmlFor="superuser">
            <FormControlLabel 
              control={
                <Field
                  name="superuser"
                  id="superuser"
                  defaultValue={false}
                  component={Checkbox} />
              } 
              label="Super administrator" 
            />            
          </label>

          <Button 
            type="submit"
            color="primary"
            variant="contained"
            className={styles.submit} 
          >
            {editingMode ? 'Edit Administrator' : 'Add Administrator'}
          </Button>

          <div className={styles.cancel}>
            <Button 
              label="Cancel" 
              color="secondary"
              component={Link}
              to="/admins"
            >
              Cancel
            </Button>
          </div>
        </form>
        
      </React.Fragment>
    );
  }
}

AdminForm.propTypes = {
  hasErrored: PropTypes.bool,
  dispatch: PropTypes.func,
  handleSubmit: PropTypes.func,
  onUnmount: PropTypes.func,
  initialValues: PropTypes.object,
  create: PropTypes.func,
  edit: PropTypes.func,
  history: PropTypes.object,
};

export { AdminForm };

const mapState = (state, ownProps) => ({
  initialValues: selectors.getAdmin(state, ownProps.match.params.adminId), 
});

export default connect(mapState, {
  create,
  edit,
  onUnmount: formLeave,
})(
  reduxForm({
    form: 'adminForm',
  })(
    withRouter(AdminForm)
  )
);