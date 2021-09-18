import NextAuth, { Session, User } from 'next-auth';
import Providers from 'next-auth/providers';
import { verifyPassword } from 'db/user/user.utils';
import { connectToDb, disconnectDb } from 'lib/connectMongoDb';
import UserModel from 'db/user/user.model';
import { IUser } from 'db/user/user.types';
import { JWT } from 'next-auth/jwt';

export default NextAuth({
  session: {
    jwt: true,
  },
  callbacks: {
    jwt: async (token, user) => {
      user && (token.user = user);
      return Promise.resolve(token);
    },
    session: async (session: Session, userOrToken: JWT | User) => {
      // @ts-ignore
      session.user = userOrToken?.user;
      return Promise.resolve(session);
    },
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials: Record<keyof IUser, string>) {
        await connectToDb();

        const user = await UserModel.findOne({
          email: credentials.email,
        });

        if (!user) {
          await disconnectDb();
          throw new Error('Wrong credentials!');
        }

        const isValid = await verifyPassword(credentials.password, user.password);

        if (!isValid) {
          await disconnectDb();
          throw new Error('Wrong credentials!');
        }

        await disconnectDb();

        return user.getUser();
      },
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
});
