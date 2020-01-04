import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Checkbox from 'material-ui/Checkbox';

const CheckboxInput = ({
  label,
  onChange,
  input: { value, ...inputProps },
  ...props
}) => {
  
  return <Checkbox
    label={label}
    {...inputProps}
    //{...props}
    checked={value ? true : false}
    onCheck={onChange}
  />;
};
CheckboxInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool,
  input: PropTypes.object,
  onChange: PropTypes.func,
  inputProps: PropTypes.object,
};

const renderCheckbox = props => (
  <Checkbox label={props.label}
    checked={props.value ? true : false}
    onCheck={props.onChange} />
);
renderCheckbox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool,
  //input: PropTypes.object,
  onChange: PropTypes.func,
  //inputProps: PropTypes.object,
};
