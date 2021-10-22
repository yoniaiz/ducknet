import { Children } from 'react';
import { GetStaticProps } from 'next';
import { PROJECTS } from '@queries/projects';
import { useQuery } from '@apollo/client';
import { initializeApollo } from '@hooks/useApollo';
import ProjectCard from '@components/projectCard';

const FindProjects = () => {
  const { data, loading } = useQuery<{ projects: Projects[] }>(PROJECTS);
  const allProjects = data?.projects;

  if (loading) {
    return (
      <>
        {Children.map([1, 2, 3], () => (
          <div>skeleton</div>
        ))}
      </>
    );
  }

  if (allProjects?.length) {
    return (
      <>
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </>
    );
  }

  return <div>No available projects</div>;
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
