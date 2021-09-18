import { IUser } from '@db/user/user.types';
import faker from 'faker';

export const buildUser = (overrides?: Partial<IUser>): IUser => ({
  username: faker.name.findName(),
  email: faker.internet.email(),
  password: `${faker.internet.password(8, false)}!1Aa`,
  ...overrides,
});
