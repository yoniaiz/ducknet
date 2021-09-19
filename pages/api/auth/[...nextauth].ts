import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { JWT } from 'next-auth/jwt';
import axios from 'axios';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'test@test.com' },
        password: { label: 'Password', type: 'password' },
      },
      // @ts-ignore
      async authorize(credentials) {
        try {
          const { data } = await axios.post<UserSession>(`${process.env.CMS_API}/auth/local`, {
            identifier: credentials.email,
            password: credentials.password,
          });

          const user: FlatUserSession = {
            jwt: data?.jwt,
            ...(data?.user || {}),
          };

          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (e) {
          return null;
        }
      },
    }),
  ],

  session: {
    jwt: true,
  },

  callbacks: {
    // @ts-ignore
    jwt: async (token: JWT & { name: string }, user: FlatUserSession) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        token.jwt = user.jwt;
        token.id = user.id;
        token.name = user.username;
        token.email = user.email;
      }
      return Promise.resolve(token);
    },

    session: async (session, user) => {
      session.jwt = user.jwt || session.jwt;
      session.id = user.id;
      return Promise.resolve(session);
    },
  },
  database: process.env.DATABASE_URL,
  pages: {
    signIn: '/login',
    error: '/login',
  },
});
