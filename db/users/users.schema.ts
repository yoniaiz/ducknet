import { Types, Schema } from 'mongoose';
import { UserDocument, UserModel } from './users.types';
import * as methods from './users.methods';
import * as statics from './users.statics';
import * as utils from './users.utils';

const UserSchema = new Schema<UserDocument, UserModel>({
  id: Types.ObjectId,
  firstName: {
    type: String,
    required: true,
    validate: {
      validator: (name: string) => name?.length > 2,
    },
  },
  lastName: String,
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

// Pre
UserSchema.pre<UserDocument>('save', utils.preUserChange);

// Virtuals
UserSchema.virtual('fullName').get(utils.getUsername);

// Methods
UserSchema.methods.getUser = methods.getUser;

// statics
UserSchema.statics.findOneOrCreate = statics.findOneOrCreate;

export default UserSchema;
