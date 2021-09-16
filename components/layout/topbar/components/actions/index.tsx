import { useSession } from 'next-auth/client';
import AuthorizedActions from './authorizedActions';
import UnauthorizedActions from './unauthorizedActions';

const Actions = () => {
  const [session] = useSession();

  if (session) {
    return <AuthorizedActions />;
  }
  return <UnauthorizedActions />;
};

export default Actions;
