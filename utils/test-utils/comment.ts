import { Schema, Document } from 'mongoose';

export interface Post {
  title: string;
}

export interface PostDoc extends Document, Post {}

const PostSchema = new Schema<PostDoc>({
  title: String,
});

export default PostSchema;
