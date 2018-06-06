import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const TextInput = ({
  input,
  label,
  type = 'text',
  fullWidth = false,
  meta: { touched, error, warning },
}) => (
  <TextField
    type={type}
    fullWidth={fullWidth}
    hintText={label}
    {...input}
    errorText={touched && error}
  />
);
TextInput.propTypes = {
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  meta: PropTypes.object,
  label: PropTypes.string.isRequired,
  input: PropTypes.object,
  touched: PropTypes.bool,
  error: PropTypes.string,
};

export default TextInput;