import { LOAD_PROJECTS } from 'GraphQl/queries/projects';
import client from '@utils/apollo-client';
import { GetStaticProps } from 'next';

interface Props {
  projects: Project[];
}

const FindProjects = ({ projects }: Props) => {
  if (projects?.length) {
    return projects.map((project) => (
      <div key={project.id}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    ));
  }
  return null;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await client.query({
      query: LOAD_PROJECTS,
    });
    return { props: { projects: data.projects }, revalidate: 60 };
  } catch (e) {
    return { props: {} };
  }
};
export default FindProjects;
