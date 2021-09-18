import axios from 'axios';
import Image from 'next/image';

interface Props {
  projects: {
    id: string;
    title: string;
    description: string;
    image: {
      url: string;
      name: string;
    };
  }[];
}
const FindProjects = ({ projects }: Props) => {
  if (projects?.length) {
    return projects.map((project) => (
      <div key={project.id}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <Image src={project.image.url} width={350} height={200} alt={project.image.name} />
      </div>
    ));
  }
  return null;
};

export const getStaticProps = async () => {
  try {
    const { data } = await axios.get(`${process.env.CMS_API}/projects`);
    data[0].image.url = `${process.env.CMS_API}${data[0].image.url}`;
    return { props: { projects: data } };
  } catch (e) {
    return { props: {} };
  }
};
export default FindProjects;
