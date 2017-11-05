import isEmailValidator from 'validator/lib/isEmail';

export const required = value => (value ? undefined : 'This field is required');

export const isEmail = value => (isEmailValidator(value) ? undefined : 'Please enter valid email');

const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const minLength5 = minLength(5);

export const passwordsMatch = (value, allValues) => 
  value !== allValues.password ? 'Passwords should match' : undefined;