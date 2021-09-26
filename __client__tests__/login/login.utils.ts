import { fireEvent, screen } from '@testing-library/dom';

const getSubmitButton = () => screen.getByRole('button', { name: /submit/i });
const getEmailInput = () => screen.getByLabelText(/email/i);
const getPasswordInput = () => screen.getByLabelText(/password/i);

const updateField = (getInput: () => HTMLElement) => (value: string) =>
  fireEvent.change(getInput(), { target: { value } });

const updateEmailInput = updateField(getEmailInput);
const updatePasswordInput = updateField(getPasswordInput);

export const loginTestUtils = {
  getSubmitButton,
  getEmailInput,
  getPasswordInput,
  updateEmailInput,
  updatePasswordInput,
};
