import { Schema, Document, Model, model, PopulatedDoc } from 'mongoose';
import { Comment } from './comment';

export interface Project {
  title: string;
  content: string;
  comments: PopulatedDoc<Comment>;
}

export interface ProjectDoc extends Document, Project {}
export interface ProjectModel extends Model<ProjectDoc> {}

const ProjectSchema = new Schema<ProjectDoc, ProjectModel>({
  title: String,
  content: String,
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
});

const Project = model<ProjectDoc, ProjectModel>('project', ProjectSchema);
export default Project;
