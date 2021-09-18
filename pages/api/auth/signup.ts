import nc from 'next-connect';
import type { NextApiResponse, NextApiRequest } from 'next';
import { connectToDb, disconnectDb } from 'lib/connectMongoDb';
import { IUser } from 'db/user/user.types';
import User from 'db/user/user.model';
import { isCostumeError } from '@utils/typeGuards';

const handler = nc();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = req.body as IUser;

    await connectToDb();

    const user = new User(data);
    const validations = user.validateSync();

    if (validations?.errors) {
      const errors: Record<string, string> = {};

      for (const error in validations.errors) {
        errors[error] = validations.errors[error].message;
      }

      throw { status: 422, message: 'Invalid credentials!' };
    }

    const existingUser = await User.findOne({ email: user.email });

    if (existingUser) {
      throw { status: 422, message: 'Email already exists!' };
    }

    await user.save();
    await disconnectDb();

    res.status(201).json({ message: 'Created user!' });
  } catch (e) {
    await disconnectDb();
    if (isCostumeError(e)) {
      res.status(e.status).json({ message: e.message });
    } else {
      res.status(500).json({ message: 'something went wrong' });
    }
  }
});

export default handler;
