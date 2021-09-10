import { model, models } from "mongoose";
import UserSchema from "./users.schema";
import { UserDocument, UserModel } from "./users.types";

export default (models.Users as UserModel) ||
  model<UserDocument, UserModel>("Users", UserSchema);
