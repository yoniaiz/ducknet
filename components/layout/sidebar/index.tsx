import Link from 'next/link';
import * as S from './sidebar.style';

const SideBar = () => {
  return (
    <S.SideBar>
      <ul>
        <li>
          <Link href="/projects">my projects</Link>
        </li>
        <li>
          <Link href="/projects/find-projects">find projects</Link>
        </li>
        <li>
          <Link href="/projects/saved">saved projects</Link>
        </li>
        <li>
          <Link href="/projects/completed">completed projects</Link>
        </li>
      </ul>
    </S.SideBar>
  );
};

export default SideBar;
