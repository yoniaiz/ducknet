import { UserModel } from './user.types';

export async function findOneOrCreate(this: UserModel, userId: string) {
  const record = await this.findOne({ userId });
  if (record) {
    return record;
  } else {
    return this.create({ userId });
  }
}
