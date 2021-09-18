import { hash, compare } from 'bcrypt';
import { UserBaseDocument, UserDocument } from './user.types';

export async function hashPassword(password: string) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export const verifyPassword = (password: string, hashedPassword: string) =>
  compare(password, hashedPassword);

export function getUsername(this: UserBaseDocument) {
  return this.firstName + ' ' + this.lastName;
}

export async function preUserChange(this: UserDocument) {
  if (this.isModified('password')) {
    const hashedPassword = await hashPassword(this.password);
    this.password = hashedPassword;
  }
}
