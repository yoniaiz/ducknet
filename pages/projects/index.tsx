import { useQuery } from '@apollo/client';
import { PROJECTS_IN_PROGRESS } from 'GraphQl/queries/user';

const Projects = () => {
  const { data, loading } =
    useQuery<{ me: { projectsInProgress: ProjectInProgress[] } }>(PROJECTS_IN_PROGRESS);

  const projects = data?.me.projectsInProgress || [];

  if (loading) {
    return <div>Loading</div>;
  }

  if (!projects.length) {
    return <div>No projects yet</div>;
  }

  return (
    <>
      {projects.map(({ project: { id, title, description } }) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </>
  );
};
export default Projects;
