import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Register from '@pages/register';
import { renderWithStyledComponents } from '@utils/test-utils/customRender';
import { registerConstants } from './register.constants';
import { registerTestUtils } from './register.utils';

const signupSubmitMockRequestBody = jest.fn<User, [User]>();

jest.mock('next-auth/client', () => ({
  signIn: () => ({}),
  getSession: () => ({}),
}));

export const handlers = [
  rest.post('/api/auth/signup', (req, res, ctx) => {
    signupSubmitMockRequestBody(req.body as User);

    return res(ctx.json({}));
  }),
];

const mockServer = setupServer(...handlers);

beforeAll(() => {
  mockServer.listen();
});

afterAll(() => {
  mockServer.close();
});

registerTestUtils.mockRouter();

describe('Register', () => {
  beforeEach(() => {
    renderWithStyledComponents(<Register />);
  });

  it('Submit button is initially disabled', () => {
    expect(registerTestUtils.getSubmitButton()).toBeDisabled();
  });

  registerConstants.INVALID_PASSWORDS.map((invalidPassword) =>
    it(`Button should be disabled on valid name with invalid password ${invalidPassword}`, async () => {
      registerTestUtils.updateEmailInput(registerConstants.VALID_EMAIL);
      registerTestUtils.updateUsernameInput(registerConstants.VALID_USERNAME);
      registerTestUtils.updatePasswordInput(invalidPassword);

      await waitFor(() => {
        expect(registerTestUtils.getSubmitButton()).toBeDisabled();
      });
    })
  );

  registerConstants.INVALID_EMAILS.map((invalidEmail) =>
    it(`Button should be disabled on valid name with invalid password ${invalidEmail}`, async () => {
      registerTestUtils.updateEmailInput(invalidEmail);
      registerTestUtils.updatePasswordInput(registerConstants.VALID_PASSWORD);
      registerTestUtils.updateUsernameInput(registerConstants.VALID_USERNAME);

      await waitFor(() => {
        expect(registerTestUtils.getSubmitButton()).toBeDisabled();
      });
    })
  );

  it('Button should be disabled when username is not valid', async () => {
    registerTestUtils.updateEmailInput(registerConstants.VALID_EMAIL);
    registerTestUtils.updatePasswordInput(registerConstants.VALID_PASSWORD);

    await waitFor(() => {
      expect(registerTestUtils.getSubmitButton()).toBeDisabled();
    });
  });

  it('Button should be enabled on valid email, password and username', async () => {
    expect(registerTestUtils.getSubmitButton()).toBeDisabled();

    registerTestUtils.updateEmailInput(registerConstants.VALID_EMAIL);
    registerTestUtils.updatePasswordInput(registerConstants.VALID_PASSWORD);

    await waitFor(() => {
      expect(registerTestUtils.getSubmitButton()).toBeDisabled();
    });

    registerTestUtils.updateUsernameInput(registerConstants.VALID_USERNAME);

    await waitFor(() => {
      expect(registerTestUtils.getSubmitButton()).not.toBeDisabled();
    });
  });

  it('On submit should send register request', async () => {
    registerTestUtils.updateEmailInput(registerConstants.VALID_EMAIL);
    registerTestUtils.updatePasswordInput(registerConstants.VALID_PASSWORD);
    registerTestUtils.updateUsernameInput(registerConstants.VALID_USERNAME);

    await waitFor(() => {
      expect(registerTestUtils.getSubmitButton()).not.toBeDisabled();
    });

    userEvent.click(registerTestUtils.getSubmitButton());

    await waitFor(() => {
      expect(signupSubmitMockRequestBody).toBeCalled();
    });

    const { email, username, password } = signupSubmitMockRequestBody.mock.calls[0][0];

    expect(email).toEqual(registerConstants.VALID_EMAIL);
    expect(username).toEqual(registerConstants.VALID_USERNAME);
    expect(password).toEqual(registerConstants.VALID_PASSWORD);
  });
});
