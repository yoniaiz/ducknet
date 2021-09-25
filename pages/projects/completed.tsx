import { useQuery } from '@apollo/client';
import { PROJECTS_COMPETED } from 'GraphQl/queries/user';

const Completed = () => {
  const { data, loading } = useQuery<{ userProjectsByStatus: Project[] }>(PROJECTS_COMPETED);

  if (loading) {
    return <div>Loading</div>;
  }

  if (!data?.userProjectsByStatus?.length) {
    return <div>No projects yet</div>;
  }

  return data.userProjectsByStatus.map(({ id, title, description, status }) => (
    <div key={id}>
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{status}</span>
    </div>
  ));
};
export default Completed;
