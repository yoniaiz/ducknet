import { IUser } from '@db/user/user.types';
import faker from 'faker';

export const buildUser = (overrides?: Partial<IUser>): IUser => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(8),
  ...overrides,
});
