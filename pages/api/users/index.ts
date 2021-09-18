import nc from 'next-connect';
import UserModel from 'db/user/user.model';
import { PartialUser } from 'db/user/user.types';
import type { NextApiResponse } from 'next';
import { connectToDb } from 'lib/connectMongoDb';

type HandlerResponse = { users: PartialUser[] } | { message: string };
const handler = nc();

handler.get(async (_, res: NextApiResponse<HandlerResponse>) => {
  try {
    await connectToDb();
    const users = await UserModel.find();

    res.status(200).json({ users: users.map((user) => user.getUser()) });
  } catch (e) {
    res.status(500).json({ message: 'error' });
  }
});

export default handler;
