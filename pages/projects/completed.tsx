import { useQuery } from '@apollo/client';
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

  return projects.map(({ project: { id, title, description } }) => (
    <div key={id}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  ));
};
export default Completed;
