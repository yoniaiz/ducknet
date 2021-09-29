import { PROJECTS } from 'GraphQl/queries/projects';
import { GetStaticProps } from 'next';
import { useQuery } from '@apollo/client';
import { initializeApollo } from '@hooks/useApollo';

const FindProjects = () => {
  const { data } = useQuery<{ projects: Projects[] }>(PROJECTS);

  const allProjects = data?.projects;

  if (allProjects?.length) {
    return allProjects.map((project) => (
      <div key={project.id}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <span>{project.status}</span>
      </div>
    ));
  }
  return null;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const apolloClient = initializeApollo();

    await apolloClient.query({
      query: PROJECTS,
    });

    return { props: { initialApolloState: apolloClient.cache.extract() }, revalidate: 60 };
  } catch (e) {
    return { props: {} };
  }
};

export default FindProjects;
