import SideBar from './sidebar';
import TopBar from './topbar';
import BottomNavigation from './bottomNavigation';
import * as S from './layout.style';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSession } from 'next-auth/client';

const Layout: React.FC = ({ children }) => {
  const [, isLoading] = useSession();

  const isSmallLaptopAndAbove = useMediaQuery('(min-width: 1200px)');

  if (isLoading) {
    return null;
  }

  return (
    <>
      <TopBar />
      <S.Container>
        {isSmallLaptopAndAbove && <SideBar />}
        <S.Main>{children}</S.Main>
      </S.Container>
      {!isSmallLaptopAndAbove && <BottomNavigation />}
    </>
  );
};

export default Layout;
