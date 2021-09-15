import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { verifyPassword } from 'db/user/user.utils';
import { connectToDb, disconnectDb } from 'lib/connectMongoDb';
import User from 'db/user/user.model';
import { IUser } from 'db/user/user.types';

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials: Record<keyof IUser, string>) {
        await connectToDb();

        const user = await User.findOne({
          email: credentials.email,
        });

        if (!user) {
          await disconnectDb();
          throw new Error('User not found!');
        }

        const isValid = await verifyPassword(credentials.password, user.password);

        if (!isValid) {
          await disconnectDb();
          throw new Error('could not log you in');
        }

        await disconnectDb();

        return { email: user.email };
      },
    }),
  ],
});
