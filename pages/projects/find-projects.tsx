import { PROJECTS } from 'GraphQl/queries/projects';
import { GetStaticProps } from 'next';
import { useQuery } from '@apollo/client';
import axios from 'axios';

interface Props {
  projects: Project[];
}

const FindProjects = ({ projects }: Props) => {
  const { data } = useQuery<{ projects: Projects[] }>(PROJECTS);

  const allProjects = data?.projects || projects;

  if (allProjects?.length) {
    return allProjects.map((project) => (
      <div key={project.id}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <span>{project.status}</span>
      </div>
    ));
  }
  return null;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await axios.get<Projects>(`${process.env.CMS_API}/projects`);
    return { props: { projects: data }, revalidate: 60 };
  } catch (e) {
    return { props: { projects: [] } };
  }
};

export default FindProjects;
