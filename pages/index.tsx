import { routes } from '@constants/routes';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';

export default function Home() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: routes.projects,
        permanent: false,
      },
    };
  }

  return {
    redirect: {
      destination: routes.login,
      permanent: false,
    },
  };
};
