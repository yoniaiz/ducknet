import { routes } from '@constants/routes';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';

const Create = () => {
  return <div>Create</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: routes.login,
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default Create;
