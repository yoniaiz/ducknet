import nc from 'next-connect';
import type { NextApiResponse, NextApiRequest } from 'next';
import { connectToDb, disconnectDb } from 'lib/connectMongoDb';
import { IUser } from 'db/user/user.types';
import User from 'db/user/user.model';

const handler = nc();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body as IUser;

  await connectToDb();

  const user = new User(data);
  const validations = user.validateSync();

  if (validations?.errors) {
    const errors: Record<string, string> = {};

    for (const error in validations.errors) {
      errors[error] = validations.errors[error].message;
    }

    res.status(422).json({ message: 'Invalid credential!', errors });
    return;
  }

  const existingUser = await User.findOne({ email: user.email });

  if (existingUser) {
    res.status(422).json({ message: 'User exists already!' });
    await disconnectDb();
    return;
  }

  await user.save();
  await disconnectDb();

  res.status(201).json({ message: 'Created user!' });
});

export default handler;
