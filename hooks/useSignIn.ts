import { routes } from '@constants/routes';
import { IUser } from 'db/user/user.types';
import { getSession, signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export const useSignIn = () => {
  const { replace } = useRouter();
  const handleSignIn = async (credential: Pick<IUser, 'email' | 'password'>) => {
    const result = await signIn('credentials', {
      redirect: false,
      ...credential,
    });

    if (result?.error) {
      toast.error(result.error);
    } else {
      const session = await getSession();
      if (session?.user) {
        replace(routes.projects);
        // @ts-expect-error
        toast.success(`Welcome ${session.user.fullName}!`);
      }
    }
  };

  return handleSignIn;
};
