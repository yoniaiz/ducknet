import Link from 'next/link';
import { useGetSideBarItems, Route } from './hooks/useGetSideBarItems';
import * as S from './sidebar.style';

const SideBar = () => {
  const { links, Element } = useGetSideBarItems();

  const getLink = ({ href, title, isSelected }: Route) => {
    return (
      <S.LinkWrapper $selected={isSelected || false} key={title}>
        <Link href={href || ''}>{title}</Link>
      </S.LinkWrapper>
    );
  };

  return (
    <S.SideBar>
      <S.LinksContainer>{links.map(getLink)}</S.LinksContainer>
      {Element}
    </S.SideBar>
  );
};

export default SideBar;
