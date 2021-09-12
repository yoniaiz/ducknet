import { UserBaseDocument } from './user.types';

export function getUser(this: UserBaseDocument) {
  const fullName = this.fullName;
  const email = this.email;
  const projects = this.projects;
  const id = this._id.toString();

  return { fullName, email, projects, id };
}
