import { routes } from '@constants/routes';
import Link from 'next/link';

interface Props<T extends Projects> {
  project: T;
}

const ProjectCard = <T extends Projects>({ project }: Props<T>) => {
  return (
    <div role="card">
      <Link href={`${routes.projects}/${project.id}`} passHref>
        <h2 style={{ cursor: 'pointer' }}>{project.title}</h2>
      </Link>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
