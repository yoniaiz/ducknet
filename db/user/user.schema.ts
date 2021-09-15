import { Types, Schema } from 'mongoose';
import { UserDocument, UserModel } from './user.types';
import * as methods from './user.methods';
import * as statics from './user.statics';
import * as utils from './user.utils';

const UserSchema = new Schema<UserDocument, UserModel>({
  id: Types.ObjectId,
  firstName: {
    type: String,
    required: true,
    validate: {
      validator: (name: string) => name?.length > 2,
    },
  },
  lastName: {
    type: String,
    required: true,
    validate: {
      validator: (name: string) => name?.length > 2,
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (password: string) => password?.length > 7,
    },
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (email: string) => email?.includes('@'),
    },
  },
});

// Pre middleware
UserSchema.pre<UserDocument>('save', utils.preUserChange);

// Virtuals
UserSchema.virtual('fullName').get(utils.getUsername);

// Methods
UserSchema.methods.getUser = methods.getUser;

// statics
UserSchema.statics.findOneOrCreate = statics.findOneOrCreate;

export default UserSchema;