import { Schema, Document, PopulatedDoc, model, Model } from 'mongoose';
import { TestUser } from './user';
export interface Comment {
  content: string;
  user: PopulatedDoc<TestUser>;
}

export interface CommentDoc extends Document, Comment {}
export interface CommentModel extends Model<CommentDoc> {}

const CommentSchema = new Schema<CommentDoc, CommentModel>({
  content: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
});

const Comment = model<CommentDoc, CommentModel>('comment', CommentSchema);

export default Comment;
