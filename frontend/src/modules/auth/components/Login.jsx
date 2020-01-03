import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Button, Paper } from '@material-ui/core';
import styled from 'styled-components';

import TextInput from '../../../shared/components/TextInput';
import { login } from '../actions';
import { isAuthentificated } from '../selectors';
import { FormTitle } from '../../../shared/components/styled/TextElements';

const Container = styled(Paper)`
  width: 400px;
  position: absolute;
  top: 50%;
  left:  50%;
  transform: translate(-50%, -50%);
  padding:  30px;
`;

const SubmitBtn = styled(Button)`
  &&  { margin-top: 20px; }
`;

const LoginForm = (props) => {    
  if (props.isAuthentificated) {
    return <Redirect to="" />;
  }

  return (
    <Container>
      <FormTitle>Welcome</FormTitle>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
          password: Yup.string()
            .min(5, 'Please use password with more then 5 characters')
            .required('Password is required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          props.login(values);

          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <TextInput name="email" placeholder="Your email" />
            <TextInput name="password" placeholder="Your password" />
            
            <SubmitBtn disabled={isSubmitting} color="primary" variant="contained" type="submit">Login</SubmitBtn>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
LoginForm.propTypes = {
  login: PropTypes.func,
  isAuthentificated: PropTypes.bool,
};

export { LoginForm };

const mapState = state => ({
  isAuthentificated: isAuthentificated(state),
});

export default connect(mapState, { login })(LoginForm);