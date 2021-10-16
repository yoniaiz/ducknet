import { useQuery } from '@apollo/client';
import ProjectCard from '@components/projectCard';
import { SAVED_PROJECTS } from 'GraphQl/queries/user';

const Saved = () => {
  const { data, loading } = useQuery<{ me: { savedProjects: CompletedProject[] } }>(SAVED_PROJECTS);

  const projects = data?.me.savedProjects || [];

  if (loading) {
    return <div>Loading</div>;
  }

  if (!projects.length) {
    return <div>No projects yet</div>;
  }

  return projects.map(({ project }) => (
    <ProjectCard key={project.id} project={project as Projects} />
  ));
};
export default Saved;
