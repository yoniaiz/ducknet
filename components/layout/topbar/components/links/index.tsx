import * as S from './links.style';
import LinkItem from './components/LinkItem';
import { MAIN_NAVIGATION } from '@constants/navigation';

export const Links = () => {
  return (
    <S.LinksContainer>
      {MAIN_NAVIGATION.map(({ Icon, path }) => (
        <LinkItem Icon={<Icon size={'3.2rem'} />} link={path} key={path} />
      ))}
    </S.LinksContainer>
  );
};
