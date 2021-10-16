import { initializeApollo } from '@hooks/useApollo';
import { PROJECT_BY_ID, PROJECTS_IDS_WITH_LIMIT } from 'GraphQl/queries/projects';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

const PROJECTS_LIMIT = 5;
const Project = ({ project }: { project: Projects; id: string }) => {
  const router = useRouter();

  if (router.isFallback) return <div>Loading</div>;
  if (!project) return <div>Not found</div>;

  return <div>{JSON.stringify(project, null, 2)}</div>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const apolloClient = initializeApollo();

  const id = context?.params?.id;

  try {
    const res = await apolloClient.query({
      query: PROJECT_BY_ID,
      variables: {
        id,
      },
    });
    const project = res.data.project;

    return {
      props: { project, id },
      revalidate: 10,
    };
  } catch (e) {
    return { props: {} };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const projects = await apolloClient.query<{ projects: Project[] }>({
    query: PROJECTS_IDS_WITH_LIMIT,
    variables: {
      limit: PROJECTS_LIMIT,
    },
  });

  const paths = projects.data.projects.map((project) => ({ params: { id: project.id } }));
  return { paths, fallback: true };
};

export default Project;
