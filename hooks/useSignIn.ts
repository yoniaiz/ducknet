import { routes } from '@constants/routes';
import { getSession, signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export const useSignIn = () => {
  const { replace } = useRouter();
  const handleSignIn = async (credential: Pick<User, 'email' | 'password'>) => {
    const result = await signIn('credentials', {
      redirect: false,
      ...credential,
    });
    if (result?.error) {
      toast.error(result.error);
    } else {
      replace(routes.projects);
      const session = await getSession();
      if (session?.user) {
        toast.success(`Welcome ${session.user.name}!`);
      }
    }
  };

  return handleSignIn;
};
