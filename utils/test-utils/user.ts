import { Schema, model, Document, Model, PopulatedDoc } from 'mongoose';
import PostSchema, { PostDoc } from './post';
import { ProjectDoc } from './project';

export interface TestUser {
  name: string;
  likes: number;
  posts: Partial<PostDoc>[];
  projects: PopulatedDoc<ProjectDoc[]>;
}

export interface TestUserDoc extends Document, TestUser {
  postCount: () => number;
}

export interface UserModel extends Model<TestUserDoc> {}

const UserSchema = new Schema<TestUserDoc, UserModel>({
  name: String,
  likes: Number,
  posts: [PostSchema],
  projects: {
    type: [Schema.Types.ObjectId],
    ref: 'project',
  },
});

UserSchema.virtual('postCount').get(function (this: TestUserDoc) {
  return this.posts.length;
});

UserSchema.pre('remove', async function (next) {
  const Project = model('project');

  await Project.remove({ _id: { $in: this.projects } });
  next();
});

const User = model<TestUserDoc, UserModel>('user', UserSchema);

export default User;
