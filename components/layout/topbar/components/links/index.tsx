import { CapIcon, ListIcon, UsersIcon } from '@icons';
import * as S from './links.style';
import LinkItem from './components/LinkItem';

const LINKS = [
  { Icon: UsersIcon, path: 'network' },
  { Icon: CapIcon, path: 'mentors' },
  { Icon: ListIcon, path: 'projects' },
];

export const Links = () => {
  return (
    <S.LinksContainer>
      {LINKS.map(({ Icon, path }) => (
        <LinkItem Icon={<Icon size={'3.2rem'} />} link={path} key={path} />
      ))}
    </S.LinksContainer>
  );
};
