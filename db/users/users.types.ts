import { Document, Model, Types } from 'mongoose';

export interface User {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  projects?: Types.Array<string>;
}

export type PartialUser = Pick<User, 'email' | 'projects'> & {
  fullName: string;
};

export interface UserBaseDocument extends User, Document {
  fullName: string;
  getUser: () => PartialUser;
}

export interface UserDocument extends UserBaseDocument {}

export interface UserPopulatedDocument extends UserBaseDocument {}

export interface UserModel extends Model<UserDocument> {
  findMyCompany(id: string): Promise<UserPopulatedDocument>;
}
