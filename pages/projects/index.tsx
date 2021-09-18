import axios from 'axios';

const Projects = () => {
  return <div>projects</div>;
};

export const getServerSideProps = async () => {
  try {
    const { data } = await axios.get(`${process.env.CMS_API}/projects?status="in-progress"`);
    return { props: { projects: data } };
  } catch (e) {
    return { props: {} };
  }
};
export default Projects;
