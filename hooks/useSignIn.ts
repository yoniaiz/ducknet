import { routes } from '@constants/routes';
import { IUser } from 'db/user/user.types';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';

export const useSignIn = () => {
  const { replace } = useRouter();
  const handleSignIn = async (credential: Pick<IUser, 'email' | 'password'>) => {
    const result = await signIn('credentials', {
      redirect: false,
      ...credential,
    });

    if (result?.error) {
      console.log(result.error);
    } else {
      replace(routes.projects);
    }
  };

  return handleSignIn;
};
