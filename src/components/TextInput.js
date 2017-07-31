import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const FormInput = ({
  // input - redux form prop
  //label,
  type = 'text',
  fullWidth = false,
  ...props
}) => {
  console.log(props);
  
  return <TextField
    type={type}
    fullWidth={fullWidth}
    { ...props }
    //hintText={label}
    // {...input} 
    //errorText={props.touched && props.error}
  />;
};
FormInput.propTypes = {
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  props: PropTypes.object,
  //label: PropTypes.string.isRequired,
  //input: PropTypes.object,
};

export default FormInput;