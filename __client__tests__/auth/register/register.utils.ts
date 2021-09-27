import { screen } from '@testing-library/dom';
import { authTestUtils } from '../auth.utils';

const getUserNameInput = () => screen.getByLabelText(/username/i);

const updateUsernameInput = authTestUtils.updateField(getUserNameInput);

export const registerTestUtils = {
  updateUsernameInput,
  ...authTestUtils,
};
