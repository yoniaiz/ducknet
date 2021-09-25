import { useMutation, useQuery } from '@apollo/client';
import Button from '@ui/button';
import { UPDATE_PROJECT } from 'GraphQl/mutations/projects';
import { PROJECTS_IN_PROGRESS } from 'GraphQl/queries/user';

const Projects = () => {
  const { data, loading } = useQuery<{ userProjectsByStatus: Project[] }>(PROJECTS_IN_PROGRESS);
  const [updateProject] = useMutation<EditProjectInput, { updateProjectInput: UpdateProjectInput }>(
    UPDATE_PROJECT
  );

  if (loading) {
    return <div>Loading</div>;
  }

  if (!data?.userProjectsByStatus?.length) {
    return <div>No projects yet</div>;
  }

  const handleUpdate = async () => {
    const selectedObject = data.userProjectsByStatus[0];
    try {
      await updateProject({
        variables: {
          updateProjectInput: {
            data: {
              title: 'Saved project number one',
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis sit est et, molestiae aut animi harum iste quasi veritatis assumenda tempora enim minus a mollitia voluptates quidem excepturi? Magnam, vitae.',
            },
            where: { id: selectedObject.id },
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {data.userProjectsByStatus.map(({ id, title, description, status }) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>{description}</p>
          <span>{status}</span>
        </div>
      ))}
      <Button onClick={handleUpdate}>update project</Button>
    </>
  );
};
export default Projects;
