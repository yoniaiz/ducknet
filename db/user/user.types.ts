import { Document, Model, Types } from 'mongoose';

export interface IUser {
  password: string;
  username: string;
  email: string;
  projects?: Types.Array<string>;
}

export type PartialUser = Pick<IUser, 'email' | 'projects'> & {
  fullName: string;
};

export interface UserBaseDocument extends IUser, Document {
  fullName: string;
  getUser: () => PartialUser;
}

export interface UserDocument extends UserBaseDocument {}

export interface UserPopulatedDocument extends UserBaseDocument {}

export interface UserModel extends Model<UserDocument> {}
