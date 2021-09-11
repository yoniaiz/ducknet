import { Schema, Document } from 'mongoose';

export interface Project {
  title: string;
  content: string;
  comments: [];
}

export interface ProjectDoc extends Document, Project {}

const ProjectSchema = new Schema<ProjectDoc>({
  title: String,
  content: String,
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
});

export default ProjectSchema;
