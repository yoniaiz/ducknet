import { waitFor } from '@testing-library/react';
import Login from '@pages/login';
import { renderWithStyledComponents } from '@utils/test-utils/customRender';
import { authConstants } from '../auth.constants';
import { authTestUtils } from '../auth.utils';

authTestUtils.mockRouter();

describe('Login', () => {
  beforeEach(() => {
    renderWithStyledComponents(<Login />);
  });

  it('Submit button is initially disabled', () => {
    expect(authTestUtils.getSubmitButton()).toBeDisabled();
  });

  authConstants.INVALID_PASSWORDS.map((invalidPassword) =>
    it(`Button should be disabled on valid name with invalid password ${invalidPassword}`, async () => {
      authTestUtils.updateEmailInput(authConstants.VALID_EMAIL);
      authTestUtils.updatePasswordInput(invalidPassword);

      await waitFor(() => {
        expect(authTestUtils.getSubmitButton()).toBeDisabled();
      });
    })
  );

  authConstants.INVALID_EMAILS.map((invalidEmail) =>
    it(`Button should be disabled on valid name with invalid password ${invalidEmail}`, async () => {
      authTestUtils.updateEmailInput(invalidEmail);
      authTestUtils.updatePasswordInput(authConstants.VALID_PASSWORD);

      await waitFor(() => {
        expect(authTestUtils.getSubmitButton()).toBeDisabled();
      });
    })
  );

  it('Button should be enabled on valid email and password', async () => {
    expect(authTestUtils.getSubmitButton()).toBeDisabled();

    authTestUtils.updateEmailInput(authConstants.VALID_EMAIL);
    authTestUtils.updatePasswordInput(authConstants.VALID_PASSWORD);

    await waitFor(() => {
      expect(authTestUtils.getSubmitButton()).not.toBeDisabled();
    });
  });
});
