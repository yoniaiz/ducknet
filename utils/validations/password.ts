import * as yup from 'yup';
import validator from 'validator';

export const passwordValidation = yup
  .string()
  .max(255)
  .test('isStrongPassword', 'password not strong enough', (password) => {
    if (password) {
      return validator.isStrongPassword(password);
    }
    return false;
  })
  .required('Email is required');
