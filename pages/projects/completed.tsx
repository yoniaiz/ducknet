import { useQuery } from '@apollo/client';
import ProjectCard from '@components/projectCard';
import { COMPLETED_PROJECTS } from 'GraphQl/queries/user';

const Completed = () => {
  const { data, loading } =
    useQuery<{ me: { completedProjects: CompletedProject[] } }>(COMPLETED_PROJECTS);

  const projects = data?.me.completedProjects || [];
  if (loading) {
    return <div>Loading</div>;
  }

  if (!projects?.length) {
    return <div>No projects yet</div>;
  }

  return projects.map(({ project }) => (
    <ProjectCard key={project.id} project={project as Projects} />
  ));
};
export default Completed;
