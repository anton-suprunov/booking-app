import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const TextInput = ({
  input,
  label,
  type = 'text',
  fullWidth = false,
  ...props
}) => (
  <TextField
    type={type}
    fullWidth={fullWidth}
    hintText={label}
    {...input}
    //errorText={props.touched && props.error}
  />
);
TextInput.propTypes = {
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  props: PropTypes.object,
  label: PropTypes.string.isRequired,
  input: PropTypes.object,
};

export default TextInput;