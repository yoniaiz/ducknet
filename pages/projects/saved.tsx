import { useQuery } from '@apollo/client';
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

  return projects.map(({ project: { id, title, description, status } }) => (
    <div key={id}>
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{status}</span>
    </div>
  ));
};
export default Saved;
