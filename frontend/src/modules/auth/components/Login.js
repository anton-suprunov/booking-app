import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';

import RaisedButton from 'material-ui/RaisedButton';

import Snack from '../../../components/Snack';
import { login } from '../actions';
import TextInput from '../../../components/TextInput';
import { isAuthentificated, hasErrored } from '../selectors';

import styles from '../auth.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors : {},
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    });
  }

  handleInputFocus = (e) => {
    this.setState({
      errors: {
        ...this.state.errors,
        [e.target.name] : '',
      },
    });
  }

  validate = () => {
    let res =  {
      email: '',
      password: '',
    };

    if (this.state.email.length === 0) {
      res.email = 'Please enter your email';
    } else if (!isEmail(this.state.email)) {
      res.email = 'Please enter valid email';
    }
    if (this.state.password.length === 0) {
      res.password = 'Please enter your password';
    }

    return res;
  }

  handleSubmit = (e) => {
    let errors;
    const { login } = this.props;

    e.preventDefault();

    errors = this.validate();
    this.setState({ errors });
    if (errors.email.length > 0 || errors.password.length > 0) {
      return;
    }

    login(this.state.email, this.state.password);
  }

  render() {
    const { isAuthentificated, hasErrored } = this.props;

    if (isAuthentificated) {
      return <Redirect to="" />;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={styles.container}>
          <h1 className={styles.title}>Welcome</h1>
          <label className={styles.label} htmlFor="email">
            <TextInput 
              name="email"
              hintText="Enter your email"
              fullWidth={true}
              value={this.state.email}
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              errorText={this.state.errors.email || ''}
            />
          </label>

          <label className={styles.label} htmlFor="password">
            <TextInput
              name="password"
              type="password"
              hintText="Enter your password"
              fullWidth={true}
              value={this.state.password}
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              errorText={this.state.errors.password || ''}
            />
          </label>
          <RaisedButton 
            type="submit"
            label="Login" 
            primary={true} 
            className={styles.submit} 
          />
        </form>
        <Snack 
          open={hasErrored}
          message="Login details are incorrect"
        />

      </div>
    );
  }
}
Login.propTypes = {
  login: PropTypes.func,
  isAuthentificated: PropTypes.bool,
  hasErrored: PropTypes.bool,
};

export { Login };

const mapState = state => ({
  isAuthentificated: isAuthentificated(state),
  hasErrored: hasErrored(state),
});

export default connect(mapState, { login })(Login);