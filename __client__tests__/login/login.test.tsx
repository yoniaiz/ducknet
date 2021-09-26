import { waitFor } from '@testing-library/react';
import * as nextRouter from 'next/router';
import Login from '@pages/login';
import { renderWithStyledComponents } from '@utils/test-utils/customRender';
import { loginConstants } from './login.constants';
import { loginTestUtils } from './login.utils';

jest
  .spyOn(nextRouter, 'useRouter')
  .mockImplementation(() => ({ ...jest.requireActual('next/router'), replace: jest.fn() }));

describe('Login', () => {
  beforeEach(() => {
    renderWithStyledComponents(<Login />);
  });

  it('Submit button is initially disabled', () => {
    expect(loginTestUtils.getSubmitButton()).toBeDisabled();
  });

  loginConstants.INVALID_PASSWORDS.map((invalidPassword) =>
    it(`Button should be disabled on valid name with invalid password ${invalidPassword}`, async () => {
      loginTestUtils.updateEmailInput(loginConstants.VALID_EMAIL);
      loginTestUtils.updatePasswordInput(invalidPassword);

      await waitFor(() => {
        expect(loginTestUtils.getSubmitButton()).toBeDisabled();
      });
    })
  );

  loginConstants.INVALID_EMAILS.map((invalidEmail) =>
    it(`Button should be disabled on valid name with invalid password ${invalidEmail}`, async () => {
      loginTestUtils.updateEmailInput(invalidEmail);
      loginTestUtils.updatePasswordInput(loginConstants.VALID_PASSWORD);

      await waitFor(() => {
        expect(loginTestUtils.getSubmitButton()).toBeDisabled();
      });
    })
  );

  it('Button should be enabled on valid email and password', async () => {
    expect(loginTestUtils.getSubmitButton()).toBeDisabled();

    loginTestUtils.updateEmailInput(loginConstants.VALID_PASSWORD);
    loginTestUtils.updatePasswordInput(loginConstants.VALID_PASSWORD);

    await waitFor(() => {
      expect(loginTestUtils.getSubmitButton()).not.toBeDisabled();
    });
  });
});
