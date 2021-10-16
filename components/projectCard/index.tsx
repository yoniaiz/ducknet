import { routes } from '@constants/routes';
import NextImage from 'next/image';
import styled from 'styled-components';
import placeholderImage from '@assets/jpg/placeholder.jpg';
import Link from 'next/link';
import MuiCard from '@material-ui/core/Card';
import MuiCardContent from '@material-ui/core/CardContent';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
interface Props<T extends Projects> {
  project: T;
}

dayjs.extend(relativeTime);

const ProjectCard = <T extends Projects>({ project }: Props<T>) => {
  return (
    <Card role="card" data-testid={`card--${project.title}`}>
      <CardContent>
        <Date>Started {dayjs(project.published_at as Date, 'R').fromNow()}</Date>
        <Link href={`${routes.projects}/${project.id}`} passHref>
          <CardTitle data-testid={`link--${project.title}`}>
            <h2>{project.title}</h2>
          </CardTitle>
        </Link>
        <p>{project.description}</p>
        <div>
          {project.technologies?.map((tech) => (
            <div key={tech?.id}>{tech?.title}</div>
          ))}
        </div>
      </CardContent>
      <div>
        <Image
          src={
            project.image?.url
              ? `${process.env.NEXT_PUBLIC_CMS_API}${project.image?.url}`
              : placeholderImage
          }
          objectFit="cover"
          height={163}
          width={268}
          alt={project.image?.alternativeText || project.title || 'image'}
        />
      </div>
    </Card>
  );
};

const Card = styled(MuiCard)`
  display: flex;
  justify-content: space-between;
  height: 18.5rem;
  padding: 1.2rem 0.8rem;
  margin: 1rem 0;
`;

const Image = styled(NextImage)`
  border-radius: 0.8rem;
`;

const CardContent = styled(MuiCardContent)`
  padding: 0;
  margin: 0;
  flex: 1;
  padding-right: 1.6rem;
`;

const CardTitle = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.blue2};
  h2 {
    margin: 0;
  }
`;

const Date = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.blue2};
`;
export default ProjectCard;
