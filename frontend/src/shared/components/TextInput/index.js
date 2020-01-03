import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';

const Container = styled.div`
  padding-bottom: 20px;
  margin-top: 10px;
`;

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Container>
      <TextField 
        label={label ? label : null}
        fullWidth={true}
        {...field}
        {...props}
        error={meta.error && meta.touched}
        helperText={meta.error && meta.touched ? meta.error : null} 
      />
    </Container>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextInput;