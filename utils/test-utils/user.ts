import { Schema, model, Document, Model } from 'mongoose';
import PostSchema, { PostDoc } from './post';

export interface TestUser {
  name: string;
  likes: number;
  posts: Partial<PostDoc>[];
}

export interface TestUserDoc extends Document, TestUser {
  postCount: () => number;
}

export interface UserModel extends Model<TestUserDoc> {}

const UserSchema = new Schema<TestUserDoc, UserModel>({
  name: String,
  likes: Number,
  posts: [PostSchema],
});

UserSchema.virtual('postCount').get(function (this: TestUserDoc) {
  return this.posts.length;
});

const User = model<TestUserDoc, UserModel>('user', UserSchema);

export default User;
