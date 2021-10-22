import { useQuery } from '@apollo/client';
import ProjectCard from '@components/projectCard';
import { PROJECTS_IN_PROGRESS } from 'GraphQl/queries/user';

const Projects = () => {
  const { data, loading } =
    useQuery<{ me: { projectsInProgress: ProjectInProgress[] } }>(PROJECTS_IN_PROGRESS);

  const projects = data?.me.projectsInProgress || [];

  if (loading && !data) {
    return <div>Loading</div>;
  }

  if (!projects.length) {
    return <div>No projects yet</div>;
  }

  return (
    <>
      {projects.map(({ project }) => (
        <ProjectCard key={project.id} project={project as Projects} />
      ))}
    </>
  );
};
export default Projects;
