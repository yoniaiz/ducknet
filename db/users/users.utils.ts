import { hash, compare } from "bcrypt";
import { UserBaseDocument, UserDocument } from "./users.types";

export async function hashPassword(password: string) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export async function verifyPassword(password: string, hashedPassword: string) {
  const isEqual = await compare(password, hashedPassword);

  return isEqual;
}

export function getUsername(this: UserBaseDocument) {
  return this.firstName + this.lastName;
}

export async function preUserChange(this: UserDocument) {
  if (this.isModified("password")) {
    const hashedPassword = await hashPassword(this.password);
    this.password = hashedPassword;
  }
}
