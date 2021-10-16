import { PROJECTS } from '@queries/projects';
import { GetStaticProps } from 'next';
import { useQuery } from '@apollo/client';
import { initializeApollo } from '@hooks/useApollo';
import ProjectCard from '@components/projectCard';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel } from '@material-ui/core';
import React from 'react';

const FindProjects = () => {
  const { data, loading } = useQuery<{ projects: Projects[] }>(PROJECTS);
  const allProjects = data?.projects;

  if (loading) {
    return (
      <>
        {React.Children.map([1, 2, 3], () => (
          <div>skeleton</div>
        ))}
      </>
    );
  }

  if (allProjects?.length) {
    return (
      <>
        <FormControlLabel control={<Checkbox id="role" />} label="Role" htmlFor="role" />

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
