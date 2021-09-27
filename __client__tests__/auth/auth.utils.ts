import { fireEvent, screen } from '@testing-library/dom';
import * as nextRouter from 'next/router';

const mockRouter = () =>
  jest
    .spyOn(nextRouter, 'useRouter')
    .mockImplementation(() => ({ ...jest.requireActual('next/router'), replace: jest.fn() }));

const getSubmitButton = () => screen.getByRole('button', { name: /submit/i });
const getEmailInput = () => screen.getByLabelText(/email/i);
const getPasswordInput = () => screen.getByLabelText(/password/i);

const updateField = (getInput: () => HTMLElement) => (value: string) =>
  fireEvent.change(getInput(), { target: { value } });

const updateEmailInput = updateField(getEmailInput);
const updatePasswordInput = updateField(getPasswordInput);

export const authTestUtils = {
  getSubmitButton,
  getEmailInput,
  getPasswordInput,
  updateEmailInput,
  updatePasswordInput,
  updateField,
  mockRouter,
};
