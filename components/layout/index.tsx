import SideBar from './sidebar';
import TopBar from './topbar';
import * as S from './layout.style';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <TopBar />
      <S.Container>
        <SideBar />
        <S.Main>{children}</S.Main>
      </S.Container>
    </>
  );
};

export default Layout;
