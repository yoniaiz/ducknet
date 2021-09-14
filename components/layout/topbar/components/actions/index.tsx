import { useSession } from 'next-auth/client';
import { ErrorBoundary } from 'react-error-boundary';
import AuthorizedActions from './authorizedActions';
import UnauthorizedActions from './unauthorizedActions';

const Actions = () => {
  const [session] = useSession();

  if (session) {
    return <AuthorizedActions />;
  }
  return (
    <ErrorBoundary
      FallbackComponent={() => <div>Error</div>}
      onError={(error, path) => console.log(error, path)}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <UnauthorizedActions />
    </ErrorBoundary>
  );
};

export default Actions;
