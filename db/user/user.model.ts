import { model, models } from 'mongoose';
import UserSchema from './user.schema';
import { UserDocument, UserModel } from './user.types';

export default (models.user as UserModel) || model<UserDocument, UserModel>('user', UserSchema);