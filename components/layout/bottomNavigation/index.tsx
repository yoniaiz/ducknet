import Link from 'next/link';
import { CreateIcon } from '@icons';
import * as S from './bottomNavigation.style';
import { MAIN_NAVIGATION } from '@constants/navigation';
import { useRouter } from 'next/router';

const LINKS = [...MAIN_NAVIGATION, { Icon: CreateIcon, path: 'Create' }];

const BottomNavigation = () => {
  const { pathname } = useRouter();
  return (
    <nav>
      <S.Navigation showLabels>
        {LINKS.map((link) => (
          <Link key={link.path} href={`/${link.path}`} passHref>
            <S.NavigationItem
              $active={pathname.includes(link.path)}
              label={link.path}
              icon={<link.Icon size={'2.5rem'} />}
            />
          </Link>
        ))}
      </S.Navigation>
    </nav>
  );
};

export default BottomNavigation;
