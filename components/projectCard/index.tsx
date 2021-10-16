import { routes } from '@constants/routes';
import Link from 'next/link';

interface Props<T extends Projects> {
  project: T;
}

const ProjectCard = <T extends Projects>({ project }: Props<T>) => {
  return (
    <div role="card" data-testid={`card--${project.title}`}>
      <Link href={`${routes.projects}/${project.id}`} passHref>
        <a data-testid={`link--${project.title}`}>
          <h2 style={{ cursor: 'pointer' }}>{project.title}</h2>
        </a>
      </Link>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
