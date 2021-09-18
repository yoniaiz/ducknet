import NextAuth, { User } from 'next-auth';
import Providers from 'next-auth/providers';
import axios from 'axios';
import { JWT } from 'next-auth/jwt';
import { IUser } from '@db/user/user.types';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'test@test.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const { data } = await axios.post(`${process.env.CMS_API}/auth/local`, {
            identifier: credentials.email,
            password: credentials.password,
          });
          if (data) {
            return data.user;
          } else {
            return null;
          }
        } catch (e) {
          // console.log('caught error');
          // const errorMessage = e.response.data.message
          // Redirecting to the login page with error message          in the URL
          // throw new Error(errorMessage + '&email=' + credentials.email)
          return null;
        }
      },
    }),
  ],

  session: {
    jwt: true,
  },

  callbacks: {
    // Getting the JWT token from API response
    jwt: async (token: JWT & { name: string }, user: IUser & User) => {
      const isSignIn = user ? true : false;
      if (isSignIn && user) {
        token.jwt = user.jwt;
        token.id = user.id;
        if (user.username) {
          token.name = user.username;
        }
        token.email = user.email;
      }
      return Promise.resolve(token);
    },

    session: async (session, user) => {
      session.jwt = user.jwt;
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
