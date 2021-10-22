import SideBar from './sidebar';
import TopBar from './topbar';
import BottomNavigation from './bottomNavigation';
import * as S from './layout.style';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSession } from 'next-auth/client';
import { use100vh } from 'react-div-100vh';
import { useRouter } from 'next/router';
import { routes } from '@constants/routes';

const Layout: React.FC = ({ children }) => {
  const { pathname } = useRouter();

  const isAuthPage = pathname.includes(routes.login) || pathname.includes(routes.register);

  const [, isLoading] = useSession();
  const fullHeight = use100vh();
  const isSmallLaptopAndAbove = useMediaQuery('(min-width: 1200px)');

  if (isLoading) {
    return null;
  }

  return (
    <>
      <TopBar />
      <S.Container>
        {isSmallLaptopAndAbove && !isAuthPage && <SideBar />}
        <S.Main isAuthPage={isAuthPage} fullHeight={fullHeight || 0}>
          {children}
        </S.Main>
      </S.Container>
      {!isSmallLaptopAndAbove && <BottomNavigation />}
    </>
  );
};

export default Layout;
