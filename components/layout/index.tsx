import SideBar from './sidebar';
import TopBar from './topbar';
import BottomNavigation from './bottomNavigation';
import * as S from './layout.style';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSession } from 'next-auth/client';
import { use100vh } from 'react-div-100vh';

const Layout: React.FC = ({ children }) => {
  const [session, isLoading] = useSession();
  const fullHeight = use100vh();
  const isSmallLaptopAndAbove = useMediaQuery('(min-width: 1200px)');
  console.log(session?.user);
  if (isLoading) {
    return null;
  }

  return (
    <>
      <TopBar />
      <S.Container>
        {isSmallLaptopAndAbove && <SideBar />}
        <S.Main fullHeight={fullHeight || 0}>{children}</S.Main>
      </S.Container>
      {!isSmallLaptopAndAbove && <BottomNavigation />}
    </>
  );
};

export default Layout;
