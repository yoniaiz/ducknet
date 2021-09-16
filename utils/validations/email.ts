import * as yup from 'yup';

export const emailValidation = yup
  .string()
  .email('Must be valid email')
  .max(255)
  .required('Email is required');
