import { Schema, model, Document, Model } from 'mongoose';

export interface TestUser {
  name: string;
  postCount: number;
}

export interface TestUserDoc extends Document, TestUser {}

export interface UserDoc extends Model<TestUserDoc> {}

const UserSchema = new Schema<TestUserDoc, UserDoc>({
  name: String,
  postCount: Number,
});

const User = model<TestUserDoc, UserDoc>('user', UserSchema);
export default User;
