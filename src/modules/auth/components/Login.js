import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'lodash/isEmpty';

import RaisedButton from 'material-ui/RaisedButton';

import { login } from '../actions';
import TextInput from '../../../components/TextInput';

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

    this.setState({ errors: res });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.validate();

    if (!isEmpty(this.state.errors)) {
      console.log('form errors');
    }
  }

  render() {
    return (
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
    );
  }
}
Login.propTypes = {
  //handleSubmit: PropTypes.func,
  //onSubmit: PropTypes.func,
};

export { Login };

const mapState = state => ({
  isAuthentificated: state.isAuthentificated,
});

const mapDispatch = (dispatch, { history }) => {
  return {
    login: (values) => {
      console.log(values);
      dispatch(login());
      history.push('/');
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(Login));