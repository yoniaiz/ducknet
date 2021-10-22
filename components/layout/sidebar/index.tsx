import Link from 'next/link';
import { useRouter } from 'next/router';
import { useGetSideBarItems, Route } from './hooks/useGetSideBarItems';
import * as S from './sidebar.style';

const SideBar = () => {
  const { asPath } = useRouter();
  const { links, elements } = useGetSideBarItems();
  const [, , uniqueId] = asPath.split('/');

  const getLink = ({ route, title }: Route) => {
    const path = typeof route === 'function' ? route(uniqueId) : route;

    return (
      <S.LinkWrapper $selected={asPath === path} key={title}>
        <Link href={path}>{title}</Link>
      </S.LinkWrapper>
    );
  };

  if (!links.length && !elements.length) {
    return null;
  }

  return (
    <S.SideBar>
      <S.LinksContainer>{links.map(getLink)}</S.LinksContainer>
      {elements.map((item) => item)}
    </S.SideBar>
  );
};

export default SideBar;
