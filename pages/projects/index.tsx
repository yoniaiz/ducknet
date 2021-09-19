import { useQuery } from '@apollo/client';
import { GET_PROJECTS_IDS } from 'GraphQl/queries/user';

const Projects = () => {
  const { data, loading } = useQuery<{ me: { projects: Project[] } }>(GET_PROJECTS_IDS);
  if (loading) {
    return <div>Loading</div>;
  }

  if (!data?.me.projects?.length) {
    return <div>No projects yet</div>;
  }

  return data.me.projects.map(({ id, title, description }) => (
    <div key={id}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  ));
};
export default Projects;
